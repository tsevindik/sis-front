import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { TranslateComponent } from '../_helpers/index';
import { AuthCrudService } from '../_services/index';
@Component({
  moduleId: module.id,
  selector: 'university-config',
  templateUrl: 'university-config.html'
})
export class UniversityConfig implements OnInit {
  constructor(
    private translate: TranslateService,
    private authWithPostService: AuthCrudService
  ) { }
  universityInfosVal: any = {};
  universityNameBoolean = false;
  universityLanguageBoolean = false;
  ngOnInit() {
    this.authWithPostService.getMethod('institute/university-config-home/').subscribe(
      data => {
        this.universityInfosVal = data.json();
      },
      err => console.log(err)
    );
  }
  // public isCollapsed:boolean = false;

  // public collapsed(event:any):void {
  //   console.log(event);
  // }

  // public expanded(event:any):void {
  //   console.log(event);
  // }
  changeUniversityName(value: string) {
    let url = 'institute/primary-university/';
    let data = {
      official_name: value
    }
    this.authWithPostService.sendMethodWithPut(url, data).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('salih')
    );
  }
}