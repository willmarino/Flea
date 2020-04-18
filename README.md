Flea is a full stack clone of the popular online marketplace Etsy. I chose to develop this project because I think that Etsy's web services demonstrate three important web development principles. First, all the entities (shops, users, products) are well organized and classified. Second, it will change which content it is displaying to a user based on past user actions (orders, product views). Third, it provides many different actions for users to perform by enabling them to be both a seller and a buyer of products. I think that these three principles: organization, customization, and variety, are what give a web service its value.

Languages Used: JavaScript, Ruby, CSS, SQL, HTML
Tech Used: PostgreSQL, Rails, React, Redux, AWS S3

## Key Features
Flea can be broken down into 5 broad features
* User Authentication
* Product creation, storage, and fetching
* Order Creation: Users can add products to cart, and then 'order' those products
* Review Creation: Users can review products they have previously bought
* Shop Manager: Users can create their own shops, and add products to those shops


### User Authentication
  The first feature I developed was the creation of accounts, and the ability to log in to them. In order to secure user privacy, I used the ruby gem BCrypt to store hashed versions of passwords in my database, instead of the actual password. When a user wants to log in, the password they entered be compared to the hashed version in the database with the BCrypt.is_password? method, which lets the program see if the password entered by the user could be hashed to get the encrypted version in the database.


### Product Creation/Storage/Fetching
  A product had to have a sizeable amount of information attached to it. First, it had to have a name, a price, and an image. The name and price were stored as a string and float, and in order to avoid storing image files locally, I used AWS S3 to store image files, and the active storage gem to store the urls associated with those images, which I then attached to the product objects for easy reading on the frontend.
  Additionally, products are associated with a shop which sells them and a category which they belong to (art, clothing, gifts, etc.). Products can also have reviews bound to them. Reviews, shops and categories are each their own class within my rails program, so I used rails associations to bind products to all of them.
  
 ### Orders
  My system for creating orders used not only an Orders class but a ProductOrders class as well. I used two classes because each order could be comprised of multiple products, and wanting to avoid using arrays as object attributes in my database, I therefore needed to create many objects to store the fact that many products had been ordered. So, each time a user checks out and submits an order, an Order object containing its own id and a user id is created, and additionally, for each product within that order, a ProductOrder object with an order id, a shop id, and a product id is created. This made it easy for me to write associations for shops to see how many products were ordered from their shop, and how many orders contained their shops products.
  
 ### Reviews
  Review creation was relatively simple. All a review is on my backend is a object which needs a user who wrote it, a title/header, and body, and a rating. Reviews are displayed on the product show and shop show pages, but are posted from different pages.
  
  
 ### Shop Manager
  The Shop Manager section of the site gives the user a separate UI from which they can look at stats regarding their shops, make/delete shops, add/remove products from shops, and edit products and shops. The most interesting portion of this is the stats page, which showed a user how much money their shop is making, how many orders it has received, and how many times it has been viewed.
 


  
  
  
  
  
  
  
  
  
