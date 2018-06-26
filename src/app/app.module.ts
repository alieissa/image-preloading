import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { 
  HeaderComponent,
  CardComponent,
  HdImageComponent
} from './__shared/components';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    HdImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
