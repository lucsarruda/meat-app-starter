import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup


  // em aplicação real, informado no back-end
  delivery: number = 8


  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão refeição', value: 'REF' }
  ]

  constructor(private orderService: OrderService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    //trabalhando com form builder
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    })
    
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }


  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }


  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }


  checkOrder(order: Order) {
    // com o map - transforma um array de cartItem em um array de OrderItem
    // pega os itens e atribui no objeto de compra
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    // recebe objeto order e envia para o backend
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        
        // redireciona para página de review
        this.router.navigate(['/order-summary'])

        console.log(`Compra feita: ${orderId}`)
        this.orderService.clear()
      })

    console.log(order)
  }

}
