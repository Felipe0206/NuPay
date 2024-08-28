import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'es');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'es';
  }
}
