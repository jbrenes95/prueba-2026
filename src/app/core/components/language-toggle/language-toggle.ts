import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [MatButtonToggleModule],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.scss',
})
export class LanguageToggle {
  private translate = inject(TranslateService);

  currentLang = this.translate.currentLang || this.translate.defaultLang;

  setLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
