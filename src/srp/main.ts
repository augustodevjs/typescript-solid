/** Single Responsability Principle */

import { Order, Product, ShoppingCart } from './classes';
import { Messaging, Persistency } from './services';

const shoppingCart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency);

console.log(order.orderStatus);

shoppingCart.addItem(new Product('Iphone', 3400));
shoppingCart.addItem(new Product('Tv', 1000));
shoppingCart.addItem(new Product('Headset', 150));

console.log(shoppingCart.item);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
