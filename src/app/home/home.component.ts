import { Component, OnInit } from '@angular/core';


declare const ResCarouselSize:any;
declare const click:any;
declare var $:any


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {

    ResCarouselSize();
    click();

 
  
  }

}
