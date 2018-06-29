import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild, 
  ElementRef
} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'ls-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.css']
})
export class LazyLoaderComponent implements OnInit, AfterViewInit {

  @ViewChild('container') container: ElementRef;

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
  
  lazyContainers: any[];

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Get lazy load img containers
    this.lazyContainers = this.view().containers();
    
    // Register scroll event. Lazy load img that come into view
    this.view().scrollAdd(() => this.load(this.lazyContainers[0]));

    // Initial lazy load. This is needed
    // in case there are elements that are visibile
    // prior to scroll event triggers;
    this.load(this.lazyContainers[0]);
  }

  // Handle all view operations
  view() {
    let scrollEvent: any;
    return {
      update: (img, container) => {
        container.appendChild(img);
        container.removeAttribute('data-lazy-container');
        return this.lazyContainers.filter(_container => _container !== container);
      },
      containers: () => {
        let lazyContainers = this.container.nativeElement.querySelectorAll('[data-lazy-container]');
        return [].slice.call(lazyContainers);
      },
      scrollAdd: onScrollHandler => {
        scrollEvent = document.addEventListener('scroll', _.debounce(onScrollHandler, 250));
        return scrollEvent;
      },
      scrollRemove: () => {
        return document.removeEventListener('scroll', scrollEvent);
      },
      isInViewport: container => {
        if(!container) {
          return false;
        }

        const top = container.getBoundingClientRect().top;
        const bottom = container.getBoundingClientRect().bottom;
        return top <= window.innerHeight && bottom >= 0
      }
    }; 
  }

  // Lazy load images
  load(container) {
    if(this.lazyContainers.length === 0) {
      this.view().scrollRemove()
    }

    if(!this.view().isInViewport(container)) {
      return;
    }

    const img = new Image();
    img.src = `./assets/images/${container.dataset.src}`;
    img.onload = () => {
      this.lazyContainers = this.view().update(img, container);      
      this.load(this.lazyContainers[0]);
    };
  }
}
