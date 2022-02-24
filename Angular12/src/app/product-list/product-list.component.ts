import { Component } from '@angular/core';
import { products, Product } from '../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent{

    public product = products;
    
    GetPrice(price: number){
        window.alert(price);
    }

    PractiveOutEvent(product: Product){
        window.alert("This is outevent of product: " + product.name);
    }
}