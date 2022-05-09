import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/sidebar/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
  
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  
  createProduct(addProduct: any):Observable<Product>{
    const baseUrl = "http://localhost:5000/product";
    console.log(addProduct.categoryID);
    return this.httpClient.post<Product>(baseUrl, addProduct);
  }

  updateProduct(productID: number, productBody: Product): Observable<Product>{
      console.log(productBody);
      const baseUrl = 'http://localhost:5000/product?productID=' + productID;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }

  viewAllProduct():Observable<Product>{
    const viewUrl = 'http://localhost:5000/product/';
    return this.httpClient.get<Product>(viewUrl); 
  }

  viewProduct(productId: number): Observable<Product>{      
    const baseUrl = 'http://localhost:5000/product?productID=' + productId;
    // console.log(baseUrl)
    return this.httpClient.get<Product>(baseUrl); 
    }
  
    deleteProduct(productID: any):Observable<Product>{
    const baseUrl = 'http://localhost:5000/product/'+productID;
    return this.httpClient.delete<Product>(baseUrl); 
    }
  
    searchCategoryProduct(categoryId: number):Observable<Product>{
    const catUrl = 'http://localhost:5000/product?categoryID='+categoryId;
    return this.httpClient.get<Product>(catUrl); 
    }
  
    getCategory():any{
    const CategoryUrl = 'http://localhost:5000/categories'
      return this.httpClient.get<Category>(CategoryUrl); 
      // console.log(this.httpClient.get<Category>(CategoryUrl));
      
  }
}
