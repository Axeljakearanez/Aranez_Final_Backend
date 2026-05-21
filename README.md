# Full-Stack Authentication System - Backend

This is the Node.js + TypeScript + MySQL backend API for the Full-Stack Authentication System final project.

## Live Links

Frontend Live Application:  
https://aranez-final-frontend.onrender.com

Backend API:  
https://aranez-final-backend.onrender.com

Swagger API Documentation:  
https://aranez-final-backend.onrender.com/api-docs/

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
- Render Web Service Deployment
- Aiven MySQL Database
- Mailtrap Email Testing

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

## Environment Variables

This backend uses environment variables for security. Sensitive data such as JWT secrets, database passwords, and SMTP credentials are not hardcoded in the source code.

Required variables:

```env
NODE_ENV=production
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=https://your-frontend-url.onrender.com

MYSQLHOST=your_mysql_host
MYSQLPORT=your_mysql_port
MYSQLUSER=your_mysql_user
MYSQLPASSWORD=your_mysql_password
MYSQLDATABASE=your_mysql_database

EMAIL_FROM=your_email_from
SMTP_HOST=your_smtp_host
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_SECURE=false