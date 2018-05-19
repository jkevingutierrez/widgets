import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Lang } from './entities/lang';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages$: Observable<Lang[]>;
  defaultLangCode = 'en';

  selectedLanguage: Lang;

  constructor(private translate: TranslateService, private langService: LangService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.defaultLangCode);

    translate.use(this.defaultLangCode);

    this.languages$ = this.langService.get();
    this.languages$.subscribe(languages => this.selectedLanguage = languages.find(lang => lang.code === this.defaultLangCode));
  }

  changeLang() {
    this.translate.use(this.selectedLanguage.code);
  }
}
