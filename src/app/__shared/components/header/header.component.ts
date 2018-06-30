import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ls-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuActive: boolean;
  constructor() { }

  ngOnInit() {
    this.isMenuActive = false;
  }

}
