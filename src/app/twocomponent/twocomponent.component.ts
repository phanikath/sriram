import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-twocomponent',
  templateUrl: './twocomponent.component.html',
  styleUrls: ['./twocomponent.component.scss']
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
