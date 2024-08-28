import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './header/home-header/home-header.component';
import { FormsModule } from '@angular/forms';
import { DarkModeToggleComponent } from '../layouts/dark-mode-toggle/dark-mode-toggle.component';
import { CoreModule } from '../core/core.module';
import { LanguageSelectorComponent } from '../layouts/language-selector/language-selector.component';




@NgModule({
  declarations: [
    HomeHeaderComponent,
    DarkModeToggleComponent,
    
    
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],

  exports:[
    HomeHeaderComponent,
  ]
})
export class SharedModule { }
