import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateService } from '@ngx-translate/core';
import { LanguageToggle } from './shared/components/language-toggle/language-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, LanguageToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    inject(TranslateService).use('es');
  }
}
