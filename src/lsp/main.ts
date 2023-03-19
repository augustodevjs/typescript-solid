/** Liskov Substitution Principle  */

import {
  FiftyPercentDiscount,
  NoDiscount,
  Order,
  Product,
  ShoppingCart,
  TenPercentDiscount,
} from './classes';
import { Messaging, Persistency } from './services';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency);

console.log(order.orderStatus);

shoppingCart.addItem(new Product('Iphone', 3400));
shoppingCart.addItem(new Product('Tv', 1000));
shoppingCart.addItem(new Product('Headset', 150));

console.log(shoppingCart.item);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
