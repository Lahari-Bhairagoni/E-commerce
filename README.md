# E-commerce
# 🛒 RiiMart - E-Commerce Web App

**RiiMart** is a modern and minimal e-commerce website designed for Gen Z shoppers. It offers a smooth online shopping experience with essential features like user authentication, product browsing, cart management, checkout, and order tracking.


##  Project Structure

E-commerce/
├── Backend/
│ ├── data/
│ │ ├── products.json
│ │ └── users.json
│ ├── node_modules/
│ ├── routes/
│ │ ├── orders.js
│ │ ├── products.js
│ │ └── users.js
│ ├── package.json
│ ├── package-lock.json
│ └── server.js
├── css/
│ └── style.css
├── js/
│ ├── cart.js
│ └── cart.css
├── cart.html
├── checkout.html
├── confirmation.html
├── index.html
├── login.html
├── product.html
├── products.html
├── register.html
└── transaction.html


## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Git


---

## 🚀 How to Run the Project

###  Backend (Node.js & Express)

1. **Open terminal** → Navigate to backend folder:
   cd E-commerce/Backend
   
2. Install required packages:
     npm install

3. Start the server:
     node server.js
Server will run on: http://localhost:5000

The backend uses .json files (products.json, users.json) for data storage instead of a database.

**Frontend**
Go to the root directory (E-commerce/).
Open index.html in any browser.
Navigate the site using:
Home → index.html
Products → products.html
Cart → cart.html
Checkout → checkout.html
Login/Register → login.html, register.html

The frontend interacts with backend APIs to register users, place orders, etc.

 Features
  * User Authentication (Login/Register)
  * Cart System (Add, View, Remove Items)
  * Checkout & Order Summary
  * Transaction Confirmation Page
  * Local JSON as database alternative
  * Modular Express Routes

Technologies Used
 -Frontend: HTML, CSS, JavaScript
 -Backend: Node.js, Express.js
 -Data Storage: JSON files (users.json, products.json)
 -Dev Tools: Git, GitHub, VS Code

To-Do / Improvements
 -Add real database (MongoDB, SQL)
 -Implement payment gateway
 -Add admin dashboard
 -Product search & filters
 -Responsive design polish

