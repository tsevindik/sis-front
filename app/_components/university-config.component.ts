import { Component, OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'university-config',
  templateUrl: 'university-config.html'
})
export class UniversityConfig implements OnInit {
  constructor() { }

  ngOnInit() { }

  public isCollapsed:boolean = false;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
}