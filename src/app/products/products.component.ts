import { Component, OnInit } from '@angular/core';
import {product} from './../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: product[] = [
    {id: '1',
          image: 'assets/images/camiseta.png',
          title: 'camiseta',
          price: 80000,
          description: 'bla bla bla bla'
      },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    price: 80000,
    description: 'bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'mug',
      price: 80000,
      description: 'bla bla bla bla'
      },
      {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'pin',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'stickers',
      price: 80000,
      description: 'bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'stickers',
      price: 80000,
      description: 'bla bla bla bla'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

}
