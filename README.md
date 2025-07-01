
```markdown
# 🛒 RiiMart – E-Commerce Shopping Cart Web App

Welcome to **RiiMart**, a full-stack e-commerce web application built using modern web technologies and DevOps practices.

---

## 📌 Project Overview

RiiMart is a feature-rich shopping cart website that allows users to:
- Register and login
- Browse products
- Add to cart and checkout
- Simulate transactions
- View their previous orders
- Logout securely

---

## Live Demo

| Component | Hosted Link |
|----------|-------------|
|  Project Access | [https://lahari-bhairagoni.github.io/E-commerce/](https://lahari-bhairagoni.github.io/E-commerce/) |
| ⚙ Backend (Render) | [https://e-commerce-shopping-cart-rc7k.onrender.com](https://e-commerce-shopping-cart-rc7k.onrender.com) |
| 🖥 Frontend (Netlify) | [https://jolly-melomakarona-49026a.netlify.app/](https://jolly-melomakarona-49026a.netlify.app/) |

---

##  Tech Stack

###  Frontend
- HTML5, CSS3, JavaScript
- DOM manipulation
- LocalStorage for session/cart
- Hosted via GitHub Pages / Netlify

### Backend
- Node.js
- Express.js
- REST APIs (users, products, orders)
- File-based data storage using JSON
- CORS enabled

###  Testing & Dev Tools
- **Postman** – API testing (`/api/users`, `/api/orders`, `/api/products`)
- **Git & GitHub** – version control and deployment
- **Docker** – containerization for local development
- **Netlify** – frontend deployment
- **Render** – backend deployment

---

##  Folder Structure

```

E-commerce/
│
├── Backend/                 # Node.js backend files
│   ├── routes/             # Route files for APIs
│   ├── data/               # JSON files (users, orders)
│   └── server.js           # Main backend server
│
├── docs/                   # Frontend files (for GitHub Pages)
│   ├── index.html          # Home page
│   ├── \*.html              # Other pages (login, register, etc.)
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
│
├── Dockerfile              # Backend Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore

````

---

## Core Features

-  User Authentication (Register/Login/Logout)
-  Add to Cart & Remove Items
-  Checkout with payment form
-  Transaction confirmation
-  My Orders page (user-specific)
-  Session maintained using LocalStorage
-  API testing with **Postman**

---

##  Docker Setup

You can run both frontend and backend in Docker containers locally for isolated testing.

###  Backend Dockerfile

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY Backend/ .
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]
````

### Frontend Dockerfile

```Dockerfile
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY docs/ /usr/share/nginx/html
EXPOSE 80
```

---

##  How to Run Locally

### Backend

```bash
cd Backend
npm install
node server.js
```

###  Frontend

Open `docs/index.html` in browser
**OR**
Use Docker to serve via nginx

---

##  API Testing with Postman

| Endpoint              | Method | Description             |
| --------------------- | ------ | ----------------------- |
| `/api/users/register` | POST   | Register new user       |
| `/api/users/login`    | POST   | Login existing user     |
| `/api/orders/`        | POST   | Submit an order         |
| `/api/orders/:email`  | GET    | Fetch orders by email   |
| `/api/products`       | GET    | Product list (test API) |

 All routes were tested using **Postman** for validation and response status.

---

