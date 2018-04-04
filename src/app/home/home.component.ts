import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var pdfjsLib: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url:string;
  constructor() { }

  ngOnInit() {
    window['zoomslider']('#demo-1');    
    this.url = window.location.origin;
  }
}
