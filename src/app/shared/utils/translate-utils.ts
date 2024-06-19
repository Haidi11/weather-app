import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationUtils {
  constructor() {}

  static initializeTranslations(translate: TranslateService) {
    translate.setTranslation('en', require('../../../assets/i18n/eng.json'));
    translate.setTranslation('slo', require('../../../assets/i18n/slo.json'));
    translate.setDefaultLang('slo');
  }

  static switchLanguage(language: string, translate: TranslateService): void {
    translate.use(language);
  }
}
