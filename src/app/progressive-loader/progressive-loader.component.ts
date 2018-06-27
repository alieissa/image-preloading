import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ls-progressive-loader',
  templateUrl: './progressive-loader.component.html',
  styleUrls: ['./progressive-loader.component.css']
})
export class ProgressiveLoaderComponent implements OnInit {

  readonly images = [
    {
      src:  'asphalt.jpg',
      placeholder: 'asphalt.progressive.jpg',
    },
    {
      src:  'city.jpg',
      placeholder: 'city.progressive.jpg',
    },
    {
      src:  'forest.jpg',
      placeholder: 'forest.progressive.jpg',
    },
    {
      src:  'friends.jpg',
      placeholder: 'friends.progressive.jpg',
    },
    {
      src:  'mountain.jpg',
      placeholder: 'mountain.progressive.jpg',
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
