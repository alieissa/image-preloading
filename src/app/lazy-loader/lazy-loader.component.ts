import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
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
  
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    let lazyContainers = this.container.nativeElement.querySelectorAll('[data-lazy-container]');
    lazyContainers = [].slice.call(lazyContainers);


    const isInViewport = (container: HTMLBaseElement) => {
      const isInView = container.getBoundingClientRect().top <= window.innerHeight && container.getBoundingClientRect().bottom >= 0
      return isInView;
    }

    const lazyLoad = (container) => {
        console.log('container', container)
        if(lazyContainers.length === 0) {
          return;
        }

        if(isInViewport(container)) {
          const img = new Image();
          img.src = `./assets/images/${container.dataset.src}`;
          img.onload = () => {
            container.appendChild(img);
            container.removeAttribute('data-lazy-container')          
            lazyContainers = lazyContainers.filter(_container => _container !== container)
            lazyLoad(lazyContainers[0])
          }
        }
    }

    document.addEventListener('scroll', _.debounce(() => {
      if(lazyContainers.length) {
        lazyLoad(lazyContainers[0])
      }
    }, 250));

    lazyLoad(lazyContainers[0]);
  }
}
