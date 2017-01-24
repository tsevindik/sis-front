import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { TranslateComponent } from '../_helpers/index';
@Component({
  moduleId: module.id,
  selector: 'university-config',
  templateUrl: 'university-config.html'
})
export class UniversityConfig {
  constructor(
  private translate: TranslateService,
  ) { }
  universityName = 'University of Wissen';
  universityNameBoolean = false;
  universityLanguageBoolean = false;
  // public isCollapsed:boolean = false;
 
  // public collapsed(event:any):void {
  //   console.log(event);
  // }
 
  // public expanded(event:any):void {
  //   console.log(event);
  // }
}