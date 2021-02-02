import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public currentRout: string = '';

  constructor(
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe( (val: any) => {
      if (val instanceof NavigationEnd) {
        this.currentRout = val.url;
      }
    });
  }

}
