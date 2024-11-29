# Authentication & Role-Based Authorization API

This project implements user authentication and role-based authorization using **Node.js**, **Express.js**, **MongoDB**, and **JWT (JSON Web Tokens)**. It includes endpoints for registering, logging in, and logging out users, along with role-based access control(RBAC) for performing CRUD operations and managing admin functionalities.

---

## Features

1. **User Authentication**:
   - Register users with hashed passwords.
   - Login with email and password to receive a JWT stored in cookies.
   - Logout by clearing the token from cookies.

2. **Role-Based Authorization**:
   - Roles: `Admin`, `Moderator`, `User`.
   - Permissions:
     - **Admin**: Create, Read, Update, Delete, Manage Roles, Access Admin Panel.
     - **Moderator**: Create, Read, Update, Delete.
     - **User**: Create, Read, Update, Delete (limited to their own content).

3. **Endpoints**:
   - **Authentication**:
     - `POST /api/auth/register`: Register a new user.
     - `POST /api/auth/login`: Login a user.
     - `POST /api/auth/logout`: Logout the user.
   - **CRUD Operations**:
     - `POST /api/roles/create`: Role-based access (Admin, Moderator, User).
     - `GET /api/roles/read`: Role-based access (Admin, Moderator, User).
     - `PUT /api/roles/update`: Role-based access (Admin, Moderator, User).
     - `DELETE /api/roles/delete`: Restricted to Admin and Moderator.
     - `POST /api/roles/manage-roles`: Restricted to Admin.
     - `GET /api/roles/access-admin-panel`: Restricted to Admin.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Security**: JWT, Bcrypt for password hashing, Cookies for token storage.
- **Testing**: Postman for API testing.

---