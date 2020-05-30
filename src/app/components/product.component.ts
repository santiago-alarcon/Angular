import { Component, Input, Output, EventEmitter } from '@angular/core';
import {product} from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
@Input() product: product;
@Output() productClicked: EventEmitter<any> = new EventEmitter();

addCart(){
console.log('Añadir al carrito');
this.productClicked.emit(this.product.id);
}
}