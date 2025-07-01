
# 🛒 RiiMart - E-Commerce Web Application

RiiMart is a responsive, full-stack e-commerce web app built using HTML, CSS, JavaScript (frontend) and Node.js + Express (backend). The application supports user authentication, product browsing, cart management, checkout with multiple payment options (Cash/Card/UPI), and order history tracking.

---

##  Live URLs

- 🔗 **Frontend (Netlify)**: [https://your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)
- 🔗 **Backend (Render)**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)
-  🔗 **You can access the project by using this link:**:


---

##  Features

###  User Features
-  Register & Login (JWT-based authentication)
-  Dynamic Login/Logout toggle
-  View and add products to cart
-  Cart management with total calculation
-  Checkout with:
  - Cash on Delivery (direct redirect to confirmation)
  - Card/UPI (redirect to secure transaction page)
-  My Orders page – shows previous orders using email
-  Confirmation page after successful order/payment
-  Protected routes for placing orders (token required)

###  Admin/Dev Features
-  Orders and users stored in `data/orders.json` and `data/users.json`
-  Dockerized frontend (served via Nginx)
-  Backend hosted on Render
-  Frontend deployed via Netlify (and Docker locally)

---

##  Technologies Used

###  Frontend:
- HTML5, CSS3
- JavaScript (Vanilla)
- Responsive Design
- LocalStorage for session/cart management

###  Backend:
- Node.js
- Express.js
- JWT (jsonwebtoken) for login protection
- File-based storage using JSON (no DB used)

###  DevOps / Deployment:
- **Docker** (Nginx for frontend)
- **Render** for backend deployment
- **Netlify** for frontend deployment
- **GitHub** for version control

---

##  Folder Structure

```

E-commerce/
├── Backend/
│   ├── data/
│   ├── routes/
│   ├── server.js
├── Frontend/
│   ├── index.html
│   ├── checkout.html
│   ├── transaction.html
│   ├── confirmation.html
│   ├── myorders.html
│   ├── login.html
│   ├── register.html
│   ├── products.html
│   ├── js/
│   └── css/
├── Dockerfile
├── docker-compose.yml
└── README.md

````

---

##  How to Run Locally

###  Frontend (Docker):
```bash
# Build image
docker build -t riimart-frontend .

# Run container
docker run -d -p 8080:80 riimart-frontend
````

Visit: `http://localhost:8080`



###  Backend (Node.js)

```bash
cd Backend
npm install
node server.js
```

Visit: `http://localhost:5000/api/orders`



##  API Endpoints

* `POST /api/users/register` – Register new user
* `POST /api/users/login` – Login and get token
* `POST /api/orders` – Place new order (requires token)
* `GET /api/orders/:email` – Get orders by email




