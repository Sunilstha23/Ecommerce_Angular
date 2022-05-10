import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

declare function moeup(): void;
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
  

export class ViewProductComponent implements OnInit {

  id = 0;
  productData!: Product[];
  productList!: Product | any;


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.productData = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
      console.log(this.id);
      this.productService.viewProduct(this.id).subscribe(viewData => {
        Object.assign(this.productData, viewData);
        console.log(this.productData);
      
        this.productService.searchCategoryProduct(this.productData[0]?.categoryID).subscribe(data => {
          this.productList = data
          console.log(this.productList)
        });
  
      });
    });
  }
  
}