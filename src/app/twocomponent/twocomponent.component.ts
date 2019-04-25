import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

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
url: any;
  constructor(private userser: UserserviceService,
    private router: Router) { }
  user;
edituser;
    ngOnInit() {
      this.userser.cast.subscribe(user => this.user = user)
    }
    edit() {
      this.userser.editUser(this.edituser);
    }

    newtab() {
      this.url = this.router.navigate(['/one']);
      window.open(this.url, '_blank');
    }
}
