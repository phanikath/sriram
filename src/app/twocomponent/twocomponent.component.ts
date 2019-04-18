import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-twocomponent',
  templateUrl: './twocomponent.component.html',
  styleUrls: ['./twocomponent.component.scss'],
  animations: [
    trigger('state', [
      state('visible', style({
        opacity: '1'
      })),
      state('hidden', style({
        opacity: '0'
      })),
      transition('* => visible', [
        animate('500ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class TwocomponentComponent implements OnInit {

  constructor(private userser: UserserviceService) { }
  user;
edituser;
    ngOnInit() {
      this.userser.cast.subscribe(user => this.user = user)
    }
    edit() {
      this.userser.editUser(this.edituser);
    }
}
