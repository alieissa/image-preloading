import { 
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ls-hd-img',
  templateUrl: './hd-image.component.html',
  styleUrls: ['./hd-image.component.css']
})
export class HdImageComponent implements OnInit {
  @Input() src: any;
  @Input() placeholder: any;

  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit() {
    const loadImg = (placeholder) => {
      const img = new Image();
      img.src = this.src;
      img.onload = () => {
        /**
        * This pushes the placeholder to background
        * Note: A transition for the placeholder (.placeholder-img)
        * is registered in style.css
        */
        placeholder.style.opacity = 0;
        this.container.nativeElement.appendChild(img)
      }
    };

    /**
     * Since the placeholders are a scale of the desired image
     * We use the placeholder aspect ration, the width of the containing
     * element to calculate the desired height of the placeholder. The
     * width is done automatically.
     */
    const imgPlaceholder = new Image();
    imgPlaceholder.src = this.placeholder;
    imgPlaceholder.onload = () => {
      const aspectRatio = imgPlaceholder.height/imgPlaceholder.width;
      const imgWidth = this.container.nativeElement.clientWidth;
      const imgHeight = Math.floor(imgWidth * aspectRatio);


      imgPlaceholder.width = imgWidth;  // Unable to do this with css
      imgPlaceholder.className = 'placeholder-img';

      // Set height to height of desired image
      this.container.nativeElement.style.height = `${imgHeight}px`;
      this.container.nativeElement.appendChild(imgPlaceholder);

      loadImg(imgPlaceholder)
    }
    
  }
}
