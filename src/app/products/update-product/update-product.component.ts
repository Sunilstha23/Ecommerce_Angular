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

  productID = 0;
  productDetails: Product[]=[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];

      this.productService.viewProduct(this.productID).subscribe(productData => {
        // this.productDetails = productData;
        Object.assign(this.productDetails, productData);
        console.log(this.productDetails);
      })
    })

  }
  updateProduct(form: any) {
    const updateProduct = {
      productID: this.productID,
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

    this.productService.updateProduct(this.productID, updateProduct).subscribe(data => console.log(data.description))
  }
}
