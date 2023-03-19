/** Interface Segregation Principle
 * os clientes não devem ser forçados a depender
 * do type, interface, ou membros abstratas que não
 * utilizam.
 */

import {
  EnterpriseCustomer,
  FiftyPercentDiscount,
  IndividualCustomer,
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
const individualCustomer = new IndividualCustomer(
  'João',
  'Monteiro',
  '91283918293182',
);
const enterpriseCustomer = new EnterpriseCustomer('NEO', '9819238129');
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

console.log(order.orderStatus);

shoppingCart.addItem(new Product('Iphone', 3400));
shoppingCart.addItem(new Product('Tv', 1000));
shoppingCart.addItem(new Product('Headset', 150));

console.log(shoppingCart.item);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
