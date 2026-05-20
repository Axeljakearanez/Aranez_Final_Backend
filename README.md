# Full-Stack Authentication System - Backend

This is the Node.js + TypeScript + MySQL backend API for the Full-Stack Authentication System final project.

## Live Links

Backend API:  
https://aranezfinalbackend-production.up.railway.app

Swagger API Documentation:  
https://aranezfinalbackend-production.up.railway.app/api-docs

Frontend Repository:  
https://github.com/Axeljakearanez/Aranez_Lab7Activity

Backend Repository:  
https://github.com/Axeljakearanez/Aranez_Final_Backend

## Tech Stack

- Node.js
- TypeScript
- Express.js
- MySQL
- Sequelize
- JWT Authentication
- Refresh Token Cookies
- Swagger API Documentation
- Railway Deployment
- Railway MySQL Database

## Features

- User registration
- Email verification
- Login authentication
- JWT access token
- Refresh token cookie
- Role-based access control
- Admin and user roles
- Password reset flow
- Swagger API documentation

## Environment Variables

This backend uses environment variables for security. Sensitive data such as JWT secrets, database passwords, and SMTP credentials are not hardcoded in the source code.

Required variables:

```env
NODE_ENV=production
JWT_SECRET=
CORS_ORIGIN=
MYSQLHOST=
MYSQLPORT=
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
EMAIL_FROM=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=