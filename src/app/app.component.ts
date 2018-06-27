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

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.itemsList().subscribe((items:any[]) => {
      this.items = items
    })
  }
}
