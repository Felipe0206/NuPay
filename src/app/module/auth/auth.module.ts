// src/app/module/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { LoginComponent } from './login/login.component'; // Ajusta la ruta según corresponda
import { AuthModuloRoutingModule } from './auth-modulo-routing.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    // Otros componentes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthModuloRoutingModule,
    
  ],
  exports:[LoginComponent,],
})
export class AuthModule { }
