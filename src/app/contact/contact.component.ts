import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 13.052344;
  lng: number = 80.12359709999998;
  zoom=15;
  constructor() { }

  ngOnInit() {
  }

}
