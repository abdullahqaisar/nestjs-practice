import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = new Date().toDateString();
    const product = new Product(prodId, title, description, price);
    this.products.push(product);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}
