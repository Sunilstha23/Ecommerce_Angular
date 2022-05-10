import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   dataValue!: Product[];
  router: Router | undefined;
  constructor(private productService: ProductService) { 
    this.dataValue = [];
  }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data => {
      Object.assign(this.dataValue, data);
      console.log(this.dataValue.length+1);
    })
    

  }
 
  

  addNewProduct(form?: any) {
    console.log(form.value.productIsAvailable);
    
    let addProduct = {
      id!: this.dataValue.length+1,
      productName!: form.value.productName,
      categoryID!: form.value.productCategory,
      description!: form.value.productDescription,
      price!: form.value.productPrice,
      isAvailable: true,
      productImg:'',
      color!: form.value.productColor,
      rating!: form.value.productRating
    };
   
    
    this.productService.createProduct(addProduct).subscribe(data => {
    Object.assign(addProduct,data);
      console.log(addProduct);
    })

  }

}
