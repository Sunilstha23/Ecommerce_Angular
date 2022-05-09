import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productID = 0;
  productData!: Product[];
  productList!: Product | any;


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.productData = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];
 
      this.productService.viewProduct(this.productID).subscribe(viewData => {
        Object.assign(this.productData, viewData);
        // console.log(typeof (this.productData[0].categoryID));
      
        this.productService.searchCategoryProduct(this.productData[0].categoryID).subscribe(data => {
          this.productList = data
          console.log(this.productList)
        });
  
      });
    });
  }
}