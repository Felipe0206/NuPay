import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string = '';
  loginImage: string='../../../../assets/images/Mesa68.png';
  isDarkMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private themeModeService: ThemeModeService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.themeModeService.getMode().subscribe(mode => {
      this.isDarkMode = mode === 'dark';
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(
      user => {
        this.router.navigate(['/home']);
        this.loading = false;
      },
      error => {
        this.errorMessage = 'Login failed. Please try again.';
        this.loading = false;
      }
    );
  }

  navigateToLogin() {
    this.router.navigate(['/login/registro']);
  }
}
