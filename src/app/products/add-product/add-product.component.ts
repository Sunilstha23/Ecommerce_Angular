import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    

  }
 
  

  addNewProduct(form: any) {
    console.log(form.value.productIsAvailable);
    
    let addProduct: any = {
      productID: 100,
      productName: form.value.productName,
      categoryID: form.value.productCategory,
      description: form.value.productDescription,
      price: form.value.productPrice,
      isAvailable: true,
      productImg:'',
      color: form.value.productColor,
      rating: form.value.productRating
    };
   
    console.log(addProduct);
    this.productService.createProduct(addProduct).subscribe(data => {
      addProduct = data;
    })

  }

}
