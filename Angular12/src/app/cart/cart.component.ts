import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
    selector:'app-cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

    constructor(private cart: CartService){

    }
    
    items = this.cart.getItems();

    ngOnInit(): void {
        
    }
}