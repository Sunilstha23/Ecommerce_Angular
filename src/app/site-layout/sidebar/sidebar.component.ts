import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from './category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
  
export class SidebarComponent implements OnInit {

  constructor(private productService: ProductService) { }

  categoryList!: Category | any;

  ngOnInit(): void {
    this.productService.getCategory().subscribe((data: Category) => {
      this.categoryList= data;
    })
  }

}
