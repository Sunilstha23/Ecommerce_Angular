import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError} from 'rxjs';
import { Category } from '../site-layout/sidebar/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }
  
  createProduct(addProduct: any):Observable<Product[]>{
    const baseUrl = `http://localhost:5000/product`;
    return this.httpClient.post<Product[]>(baseUrl, addProduct);
  }

  updateProduct(productID: number, productBody: Product): Observable<Product[]>{
      console.log(productBody);
      const baseUrl = 'http://localhost:5000/product/' + productID;
    return this.httpClient.patch<Product[]>(baseUrl, productBody).pipe(catchError(this.handleError));;
  }

  //get all product list
  viewAllProduct():Observable<Product[]>{
    const viewUrl = 'http://localhost:5000/product/';
    return this.httpClient.get<Product[]>(viewUrl).pipe(catchError(this.handleError)); 
  }

  viewProduct(productId: number): Observable<Product>{      
    const baseUrl = 'http://localhost:5000/product?id=' + productId;
    // console.log(baseUrl)
    return this.httpClient.get<Product>(baseUrl); 
    }
  
    deleteProduct(productID: number):Observable<Product>{
      const baseUrl = 'http://localhost:5000/product/' + productID;
      console.log(productID)
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
  
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client Error
      errorMessage = `Error: ${error.error.message}`
    } else {
      //server error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
