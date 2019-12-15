import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 60;
  imageMargin: number = 5;
  displayImage: boolean = false;
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  toggleImage(): void {
    this.displayImage = !this.displayImage;
  }

  performFiltering(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(notification: string): void {
    this.pageTitle = "Product List " + notification;
  }

}
