import { Component, OnInit, SimpleChanges, OnChanges, Input, ContentChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-onecomponent',
  templateUrl: './onecomponent.component.html',
  styleUrls: ['./onecomponent.component.scss']
})
export class OnecomponentComponent implements OnInit, OnChanges {
  @Input() message: string;
  @ContentChild(OnecomponentComponent) contentChild: OnecomponentComponent;
 ngcontnet = 'karghieykya';
  user;
  edituser;
  name = 'sriram';
  private hero;
  constructor(private userser: UserserviceService) { 
this.user ='3';
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      let change = changes[propName];
      
      let curVal  = JSON.stringify(change.currentValue);
      console.log(curVal);
    }
   }
 
  ngOnInit() {
    this.userser.cast.subscribe(user => this.user = user)
  }

  ngAfterContentChecked(): void {
  
    this.hero = this.contentChild.ngcontnet;
    console.log('ngAfterContentChecked'+ ' ' + this.hero);
  
}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit");
}

  edit() {
    this.userser.editUser(this.edituser);
  
  }
}
