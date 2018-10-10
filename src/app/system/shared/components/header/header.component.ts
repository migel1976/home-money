import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

	date:Date = new Date
  ngOnInit() {
  }

}
