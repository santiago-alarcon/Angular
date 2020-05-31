import 
{ Component,
     Input,
      Output,
       EventEmitter,
        OnChanges,
         SimpleChange,
          OnInit,
          DoCheck,
          ngOnDestroy 
        } from '@angular/core';
import {product} from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, ngOnDestroy{
@Input() product: product;
@Output() productClicked: EventEmitter<any> = new EventEmitter();
 today  = new Date();
constructor(){
    console.log('constructor');
}

//ngOnChange(changes: SimpleChange){
  //  console.log('ngOnChanges');
  //  console.log(changes);
//}

ngOnInit(){
    console.log('3.ngOnChanges');
}
ngDoCheck(){
    console.log('4.ngDoCheck');
}
ngOnDestroy(){
    console.log('5.ngOnDestroy');
}


addCart(){
console.log('Añadir al carrito');
this.productClicked.emit(this.product.id);
}
}