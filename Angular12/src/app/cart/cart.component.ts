import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
    selector:'app-cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

    constructor(private cart: CartService, private formBuilder: FormBuilder){

    }
    
    items = this.cart.getItems();

    productForm = this.formBuilder.group({
        name: '',
        address: ''
    })

    ngOnInit(): void {
        
    }

    onSubmit(): void{
        this.items = this.cart.clearCart();
        console.warn("You're summitted: " + this.productForm.value.name + "-------" + this.productForm.value.address);

        this.productForm.reset();
    }
}