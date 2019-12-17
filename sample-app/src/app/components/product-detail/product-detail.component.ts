import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string="Product Detail";
  product:IProduct;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id =+this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` :${id}`;
    this.product={
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };
  }
  onBack():void{
  this.router.navigate(['/products']);
  }

}
