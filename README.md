# fwd-mystore
FWD angular project

This project was initially generated with <a href="https://angular.io/cli">Angular CLI</a>: 14.0.7 & Node: 16.15.1.

<h2>Summary</h2>

   <p> In this project, I will use Angular to create a simple single-page e-commerce application called FWD Mystore. The application will include a variety of   Angular components that communicate with one another, such as a product list component that displays a list of items for which a user can shop. The mock data is generated from the provided static json file, and the items are then rendered into the page.</p>
    

<h2>App components</h2>

   <p> Product list product-list: list of all product items on homepage Product item product-item: single component that makes up product list Product item details product-item-details: detail of product when users navigate to single product with specific id Nav bar nav-bar: navigation bar that stays on top of every route Favorite button favorite-button: favorite icon in product item detail that helps users save their favorite products Cart cart: checkout form with form validation (left) and cart list (right) Confirm Order confirmation: confirmOrder page after successful checkout Page not found page-not-found: 404 error page. </p>


<h3>App specifics</h3>
<h3>Model:</h3>

    Iproduct
    Iuser

<h3>Service:</h3>

    Cart
    Product
    Confirm Order
 
 
 <h2>Getting Started</h2>

    *- To get this project, type git clone https://github.com/mohamedelbazdev/fwd-mystore.git in your termical to clone this project to your computer.
    *- <code>cd fwd-mystore </code> to cd into your project.
    *- Type <code>npm install</code> to install all the dependencies.
    *- Type <code>ng serve</code> to start the project.
    *- Go to localhost:4200 to see the app.
    
 <h3>Routing:<h3>

    /: home -> products list 
    /product/:productName: product item details page
    /cart: cart checkout page
    /confirm-order: confirm order page
    **: wild card - 404 error page


    
![image](https://user-images.githubusercontent.com/68769906/199476810-a495bc2b-70ac-46d6-9bb6-57b819d51a1f.png)
  
  ![image](https://user-images.githubusercontent.com/68769906/199477043-0d4bb9b0-4699-4488-af02-267beb0a0dc1.png)


