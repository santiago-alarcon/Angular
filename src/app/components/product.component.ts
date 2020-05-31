import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, OnInit } from '@angular/core';
import {product} from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnChanges, OnInit{
@Input() product: product;
@Output() productClicked: EventEmitter<any> = new EventEmitter();

constructor(){
    console.log('constructor');
}

ngOnChange(changes: SimpleChange){
    console.log('ngOnChanges');
    console.log(changes);
}

ngOnInit (){
    console.log('3.ngOnChanges')
}


addCart(){
console.log('Añadir al carrito');
this.productClicked.emit(this.product.id);
}
}