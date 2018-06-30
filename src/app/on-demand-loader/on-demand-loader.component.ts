import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ls-on-demand-loader',
  templateUrl: './on-demand-loader.component.html',
  styleUrls: ['./on-demand-loader.component.css']
})
export class OnDemandLoaderComponent implements OnInit, AfterViewInit {

  readonly images = [
    {
      src:  './assets/images/asphalt.jpg',
    },
    {
      src:  './assets/images/city.jpg',
    },
    {
      src:  './assets/images/forest.jpg',
    },
    {
      src:  './assets/images/friends.jpg',
    },
    {
      src:  './assets/images/mountain.jpg',
    }
  ];

  hiddenImages: any[];
  showLoader: boolean;

  constructor() { }

  ngOnInit() {
    this.showLoader = true;
  }

  ngAfterViewInit() {
    let hiddenImages = document.querySelectorAll('[data-src]')
    this.hiddenImages = [].slice.call(hiddenImages);
    this.showLoader = !!this.hiddenImages.length;
  }

  view() {
    return {
      update: img => {
        if(!img) {
          console.warn('Attempted to show undefined image')
          return;
        }

        img.parentElement.classList.remove('is-hidden');
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
      }
    }
  }

  // Load next two images
  loadMore() {
    this.view().update(this.hiddenImages[0]);
    this.view().update(this.hiddenImages[1]);

    this.hiddenImages = this.hiddenImages.slice(2);
    this.showLoader = !!this.hiddenImages.length;
  }

}
