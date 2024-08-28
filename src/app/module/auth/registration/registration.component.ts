import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})



export class RegistrationComponent implements OnInit {
navigateToLogin() {
throw new Error('Method not implemented.');
}

  
  pageClass = 'app-root';
  registrationForm: FormGroup;
  loading = false;
  status: string = '';
  countryCodes = [{code: '+1', label: 'USA'}, {code: '+57', label: 'Colombia'}, {code: '+34', label: 'Spain'}]; // Agrega más códigos de países si es necesario

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private themeModeService: ThemeModeService
  ) {
    this.registrationForm = this.fb.group({
      fullname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', [Validators.required]],
      mobil: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      changepassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.pageClass = this.themeModeService.getPageClass();
  }
  

  onSubmit(): void {
    this.loading = true;
    if (this.registrationForm.invalid) {
      this.loading = false;
      return;
    }

    const { fullname, lastname, email, countryCode, mobil, password, acceptTerms } = this.registrationForm.value;
    this.authService.register({ fullname, lastname, email, countryCode, mobil, password, acceptTerms })
      .subscribe({
        next: () => {
          // Manejar éxito
          this.loading = false;
        },
        error: (error) => {
          // Manejar error
          this.status = 'Error durante el registro. Intenta de nuevo.';
          this.loading = false;
        }
      });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const changepassword = group.get('changepassword')?.value;
    return password === changepassword ? null : { mismatch: true };
  }

  isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control?.invalid === true && (control.dirty || control.touched);
  }
  
  isValid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control?.valid === true && (control.dirty || control.touched);
  }
  
}
