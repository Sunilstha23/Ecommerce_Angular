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
  
  // createProduct(productBody):Observable<Product>{
  //   const baseUrl = 'http://localhost:5000/product';
  //   return this.httpClient.post<Product>(baseUrl, productBody);
  // }

  //   updateProduct(productID, productBody):Observable<Product>{
  //   const baseUrl = 'http://localhost:5000/product/'+productID;
  //   return this.httpClient.put<Product>(baseUrl, productBody);    
  // }

    viewProduct():Observable<Product>{
    const baseUrl = 'http://localhost:5000/product/';
    return this.httpClient.get<Product>(baseUrl); 
    }
  
    // deleteProduct(productID):Observable<Product>{
    // const baseUrl = 'http://localhost:5000/product/'+productID;
    // return this.httpClient.delete<Product>(baseUrl); 
    // }
  
    searchCategoryProduct(categoryId: number):Observable<Product>{
    const catUrl = 'http://localhost:5000/product?categoryID='+categoryId;
    return this.httpClient.get<Product>(catUrl); 
    }
  
    //  searchDateProduct(dataParam):Observable<Product>{
    // const baseUrl = 'http://localhost:5000/product/category'+dataParam;
    // return this.httpClient.get(baseUrl); 
    //  }
  
    getCategory():any{
    const CategoryUrl = 'http://localhost:5000/categories'
      return this.httpClient.get<Category>(CategoryUrl); 
      // console.log(this.httpClient.get<Category>(CategoryUrl));
      
  }
}
