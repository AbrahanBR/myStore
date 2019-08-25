import { Component, OnInit } from '@angular/core';
import { Product } from '../product-interface';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  public onSubmit(form: NgForm): void {
    const customerData = form.value;
    console.warn('your oder has been submitted', customerData);

    this.items = this.cartService.clearItems();
  }
}
