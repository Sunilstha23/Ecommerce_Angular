import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number= 0;
  productDetails: any ={};
  compare: Product = {
    id: 0,
    productName: '',
    categoryID: 0,
    description: '',
    price: 0,
    isAvailable: true,
    productImg: '',
    color: '',
    rating: '',
    
  };
  

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];

      this.productService.viewProduct(this.id).subscribe(productData => {
        // this.productDetails = productData;
        this.productDetails = productData;
        // console.log(this.productDetails);
      })
    })

  }
  updateProduct(form: any) {
    const updateProduct = {
      id: this.id,
      productName: form.value.productName,
      categoryID: form.value.categoryID,
      description: form.value.description,
      price: form.value.price,
      isAvailable: true,
      productImg: '',
      color: form.value.color,
      rating: form.value.rating
    };
    console.log(form);

    this.productService.updateProduct(this.id, updateProduct).subscribe(data => console.log(data))
  }
}
