import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ls-hd-img',
  templateUrl: './hd-image.component.html',
  styleUrls: ['./hd-image.component.css']
})
export class HdImageComponent implements OnInit {
  @Input() src: any;
  @Input() placeholder: any;
  constructor() { }

  ngOnInit() {
    console.log(this.src);
    console.log(this.placeholder)
    
  }

}
