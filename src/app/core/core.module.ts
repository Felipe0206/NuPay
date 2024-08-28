import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; // Importa TranslateModule
import { ThemeModeService } from './services/modoOscuro/theme-mode.service';
import { LanguageSelectorComponent } from '../layouts/language-selector/language-selector.component';


@NgModule({
  declarations: [
    LanguageSelectorComponent, // Declara el componente aquí si está en CoreModule
  ],
  imports: [
    CommonModule,
    TranslateModule // Asegúrate de que TranslateModule esté aquí
  ],
  providers: [ThemeModeService],
  exports: [
    LanguageSelectorComponent // Exporta el componente si es necesario en otros módulos
  ]
})
export class CoreModule { }
