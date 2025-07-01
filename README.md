

```markdown
# RiiMart – E-Commerce Shopping Cart Web App

RiiMart is a full-stack e-commerce web application developed using modern web technologies and DevOps practices.

---

## Project Overview

RiiMart allows users to:
- Register and log in
- Browse and view products
- Add items to a cart
- Checkout and simulate transactions
- View previous orders
- Log out securely

---

## Live Demo

| Component          | Hosted Link                                                                 |
|--------------------|------------------------------------------------------------------------------|
| GitHub Pages       | [https://lahari-bhairagoni.github.io/E-commerce/](https://lahari-bhairagoni.github.io/E-commerce/) |
| Backend (Render)   | [https://e-commerce-shopping-cart-rc7k.onrender.com](https://e-commerce-shopping-cart-rc7k.onrender.com) |
| Frontend (Netlify) | [https://jolly-melomakarona-49026a.netlify.app/](https://jolly-melomakarona-49026a.netlify.app/) |

---

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- DOM manipulation
- LocalStorage for session and cart data
- Hosted via GitHub Pages and Netlify

### Backend
- Node.js
- Express.js
- RESTful APIs for users, products, and orders
- File-based data storage using JSON
- CORS enabled

### Dev Tools
- Postman – API testing
- Git & GitHub – version control and deployment
- Docker – local containerized testing (optional)
- Render – backend deployment
- Netlify – alternative frontend deployment

---

## Folder Structure

```

E-commerce/
├── Backend/
│   ├── routes/
│   ├── data/
│   └── server.js
│
├── docs/
├── index.html
├── \*.html (login, register, etc.)
├── css/
├── js/
├── Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore

````

---

## Features

- User registration and login
- Add to cart and remove from cart
- Checkout and transaction simulation
- My Orders page to track past orders
- Persistent cart using LocalStorage
- API testing via Postman

---

## Docker

Use Docker for local containerized deployment.

### Backend Dockerfile

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

## Running the Project Locally

### Backend

```bash
cd Backend
npm install
node server.js
```

### Frontend

Open `docs/index.html` in a browser
**OR**
Use Docker to serve using the frontend Dockerfile

---

## API Endpoints (Postman Ready)

| Endpoint            | Method | Description              |
| ------------------- | ------ | ------------------------ |
| /api/users/register | POST   | Register a new user      |
| /api/users/login    | POST   | Log in an existing user  |
| /api/orders/        | POST   | Submit a new order       |
| /api/orders/\:email | GET    | Retrieve orders by email |
| /api/products       | GET    | Get product list (test)  |

```



