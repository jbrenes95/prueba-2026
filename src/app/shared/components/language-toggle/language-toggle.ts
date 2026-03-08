import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, startWith } from 'rxjs';
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

  currentLang = toSignal(
    this.translate.onLangChange.pipe(
      map(e => e.lang),
      startWith('es'),
    ),
  );

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
