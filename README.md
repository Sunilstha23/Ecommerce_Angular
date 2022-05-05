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
