import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, ContentChild, OnDestroy } from '@angular/core';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { slideInAnimation } from './app.animation';
enum color {
  red = 0,
  blue = 1,
  green = 2
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
  AfterViewChecked, OnDestroy {

    getState(outlet) {
      return outlet.activatedRouteData.state;
    }

    show:boolean = false;
  ngOnDestroy(): void {
   //  console.log("ngOnDestroy");
  }
  @ViewChild(OnecomponentComponent) vewChild: OnecomponentComponent;

  nameparent;
  user;
  edituser;


  ngAfterViewChecked(): void {

    // this.nameparent = this.vewChild.name;
    // console.log('AfterViewChecked' + this.nameparent);

  }
  ngAfterViewInit(): void {
   //  console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");
  }
  ngOnInit(): void {
    // var obserable = of(0,1,2,3,4).pipe(first()).subscribe((x: any) => console.log(x))
  

    // var obserable = Observable.create((obsere: any) => {
    //   obsere.next('hey')
    //   obsere.next('how r u')
    //   obsere.complete()
    //   obsere.next('this  r u')

    // });
    // obserable.subscribe((x: any) => console.log(x))
  
  }
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
   //  console.log('changes');

  }

  getbutton() {
   //  console.log("getbutton");
  }


}
