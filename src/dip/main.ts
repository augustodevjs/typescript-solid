import { MessagingProtocol } from './classes/interfaces/messaging-protocol';
/** Dependency Inversion principle
 * Módulos de alto nível não devem depender de módulos de
 * baixo nível. Ambos devem depender de abstrações (classes abstratas, types e  interfaces).
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes.Detalhes devem
 * depender de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
 */

import {
  EnterpriseCustomer,
  Order,
  Product,
  ShoppingCart,
  TenPercentDiscount,
} from './classes';
import { Persistency } from './services';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer('NEO', '9819238129');

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
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
