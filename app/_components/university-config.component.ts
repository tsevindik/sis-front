import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'university-config',
  templateUrl: 'university-config.html'
})
export class UniversityConfig {
  constructor() { }
  
  universityName = 'University of Wissen';
  universityNameBoolean = false;
  universityLanguageBoolean = false;
  public isCollapsed:boolean = false;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
}