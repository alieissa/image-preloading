import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any[];

  images = [
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

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.itemsList().subscribe((items:any[]) => {
      this.items = items
    })
  }
}
