import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/core/services/traductor/translation.service';


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  languages = [
    { lang: 'en', name: 'English', flag: 'assets/images/us.png' },
    { lang: 'es', name: 'Español', flag: 'assets/images/col.png' }
  ];
  currentLanguage = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  onLanguageChange(event: any) {
    const selectedLanguage = event.target.value;
    this.translationService.changeLanguage(selectedLanguage);
    this.currentLanguage = selectedLanguage;
  }
}
