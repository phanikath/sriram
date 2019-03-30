import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

   subject = new BehaviorSubject(0);  // 0 is the initial value

   editUser1(newuser) {
    this.subject.subscribe({
      next: (v) => console.log('observerA: ' + v)// output initial value, then new values on `next` triggers

    });
   }

  private user = new BehaviorSubject<string>('john');

  cast = this.user.asObservable();

  editUser(newuser) {
this.user.next(newuser);
  }
}
