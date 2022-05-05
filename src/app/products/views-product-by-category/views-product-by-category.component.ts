import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/sidebar/category';

@Component({
  selector: 'app-views-product-by-category',
  templateUrl: './views-product-by-category.component.html',
  styleUrls: ['./views-product-by-category.component.css']
})

export class ViewsProductByCategoryComponent implements OnInit {

  
  searchCategory = 0;
  productList: Product | any;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(data => {
      this.searchCategory = data['id'];
      console.log(this.searchCategory);
      
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
        this.productList = categoryData;
      })
    })
  }

}
