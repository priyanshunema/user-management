# User Management REST API

A complete RESTful API built with Node.js, Express, Sequelize (MySQL), and JWT-based authentication & authorization.

---

## 📦 Features
- User Registration & Login
- JWT-based Auth with Role Authorization (Admin/User)
- CRUD operations for Users
- Create & Assign Roles to Users
- Filtered list of users (search by name, email, phone, role)
- Sequelize migrations and seeders for easy DB setup
- Folder structure following best practices

---

## 🚀 Tech Stack
- Node.js
- Express
- Sequelize ORM
- MySQL
- JWT

---

## 📁 Folder Structure
```
├── app.js
├── config
│   └── config.js
├── controllers
├── middlewares
├── migrations
├── models
├── routes
├── seeders
├── .env.example
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-github-repo-link>
cd user-management-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file from `.env.example`
```bash
cp .env.example .env
```
Edit `.env` file:
```
PORT=5000
DB_NAME=userdb
DB_USER=root
DB_PASS=your_password
DB_HOST=127.0.0.1
JWT_SECRET=your_jwt_secret
```

> ✅ Make sure you have a MySQL database created with the name in `DB_NAME`

### 4. Run Migrations
```bash
npx sequelize-cli db:migrate
```

### 5. Run Seeders (creates roles, admin user, role assignment)
```bash
npx sequelize-cli db:seed:all
```

### 6. Start the Server
```bash
npm run dev      # for development with nodemon
# or
npm start         # for production
```

---

## 🔑 Default Admin Credentials
```
Email: admin@example.com
Password: admin123
```

---

## 🧪 Postman Collection
- [Download UserManagement.postman_collection.json](./UserManagement.postman_collection.json)
- Import into Postman

---

## 📌 Available API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Users
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `GET /api/users?firstName=&role=`

### Roles
- `POST /api/roles` (Admin only)
- `POST /api/roles/assign/:userId` (Admin only)

---

## 🛡️ Authorization
- All protected routes require `Authorization: Bearer <token>`
- Admin access is needed for managing roles and listing all users

---

## 📞 Contact
For issues or contributions, raise an issue or submit a PR.

---

> Developed with 💻 by [Your Name]
