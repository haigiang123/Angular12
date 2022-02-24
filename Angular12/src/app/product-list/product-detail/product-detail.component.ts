import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../product';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{

    public product !: Product;

    constructor(private router: ActivatedRoute){}

    ngOnInit(): void {
        const routerParams = this.router.snapshot.paramMap;
        const productIDFromParams = Number(routerParams.get('productID'));

        this.product = products.find(x => x.id === productIDFromParams) as Product;
    }
}