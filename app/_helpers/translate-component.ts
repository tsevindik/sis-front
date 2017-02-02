import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'translate',
  template: ``
})
export class TranslateComponent {
  public static Language: TranslateService;
  constructor(private translate: TranslateService) {
    TranslateComponent.Language = translate;
    TranslateComponent.Language.addLangs(["en", "tr"]);
    TranslateComponent.Language.setDefaultLang('en');
    const browserLang = TranslateComponent.Language.getBrowserLang();
    TranslateComponent.Language.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }


}