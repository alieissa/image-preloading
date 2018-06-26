import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly url = 'https://next.json-generator.com/api/json/get/4kiDK7gxZ';
  constructor(private _http: HttpClient) { }

  itemsList() {
    return this._http.get(this.url);
  }
}
