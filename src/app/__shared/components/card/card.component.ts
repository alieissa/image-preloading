import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'ls-card',    
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
    @Input() item: any;
    constructor() {

    }

    ngOnInit() {}
}