import { CartItem } from './interfaces';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
