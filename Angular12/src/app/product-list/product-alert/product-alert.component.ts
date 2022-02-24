import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/product";

@Component({
    selector: 'app-product-alert',
    templateUrl: 'product-alert.component.html'
})

export class ProductAlertComponent{
    @Input() product!: Product;
    @Output() outEvent = new EventEmitter<Product>();
}