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
