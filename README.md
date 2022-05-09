# Angular Ecommerce website

**Json Server**

create folder data inside assets folder and make file as db.json

to install json server `npm install --save json-server`

now goto package.json file and make change inside scripts

```Json
"scripts":{
"server": "json-server --watch src/assets/data/db.json --port 5000"
}
```

to run the json server on cmd `npm run server`

## **bootstrap setup**

to install bootstrap`npm install --save bootstrap`
`npm install --save jquery`

now we need to change angular.json file and make change inside styles

```Json
  "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
```

## **creating Module and component**

to create module `ng g m orders`
it will create orders module with .ts file

now to create component insed module
first go to module file through cmd >src/app/orders then `ng g c order-list`

import thr module inside app.module.ts

```Javascript
      import { OrdersModule } from './orders/orders.module';
      @NgModule({
            imports: [
          OrdersModule
        ],
      })
```

to export the order-list component to other component export the file by making change on orders.module.ts file

```Javascript
  exports: [
   ListOrderComponent
  ]
```

now we can use component by `<app-list-order></app-list-order>` as the <> is seletor_name

**Lazy Loading in Angular**
`ng g m products --route products --module app.module`
it will create products module and component along with routing.

**routing**
product which need to be load only loaded (which mean other component should not be load)

**BootStrap Theme**
startBootStrap [click](https://startbootstrap.com/)

### Routing Feacture module

**ACtivatedRouted** it is used to get the state of route
```JavaScript
import { ActivatedRoute } from '@angular/router';

  productID = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];
    })
  }
```
params is the parameter of route which is store in data throung subscribe() method

### Service in angular

### interface
to create interface go to product module in cmd and run `ng g interface product`

__to use interface in module__
``` Javascript
import { Observable } from 'rxjs';
import { Product } from './product';

  createProduct(productBody):Observable<Product>{
    const baseUrl = 'http://localhost:5000/product';
    return this.httpClient.post(baseUrl, productBody);
  }

```
where observable help to observe the type of data with bind interface product

**forms in angular**
---
> in angular there is class call FormControl(for each input fill we can check the current value of input`value`, if value is touched or untouched `touched / untouched,` `dirty` which mean its value is changed,'pristine' as the vale is unchanged, `valid` for whether it's valid or not if not what is validation error`error`)

> at validation to input by directives (template-driven) and code(reactivr=e form) where reactive is more control over validation logic ,good for compex forms and template driven is easier and less control.

__template driven__
ngModel directive is used in input form `ngModel` with name attribute `name='first name'` template Variable as `#firstName ='ngModel'`

``` HTML
<form>
  <div class= "form-group">
    <label for="firdtName">First Name</label>
    <input
      required
      minLength="3"
      maxLength="10"
      ngModel
      name="firstName"
      id="firstName"
      type="text"
      class="form-control">
    <div class="alert alert-danger" 
      *ngIf="firstName.touched && !firstName.valid" >
       <div *ngif="firstName.errors.reduired">first name is required</div>
       <div *ngIf ="firstName.errrors. min length && firstName.errors.maxLength"> length of min{{firstName.errors.minlength.requiredLength}}
       </div>
    </div>  
```

__for submit form__

