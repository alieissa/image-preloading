import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { ProgressiveLoaderComponent } from './progressive-loader/progressive-loader.component';
import { 
  HeaderComponent,
  CardComponent,
  HdImageComponent
} from './__shared/components';
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    HdImageComponent,
    ProgressiveLoaderComponent,
    LazyLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
