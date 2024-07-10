# Realtime Notification System

This is a microservices-based real-time notification system built using Node.js, Express, MongoDB, RabbitMQ, and Socket.IO. The system handles high-volume message processing and delivers real-time notifications to users.

## Features

- User authentication with JWT
- Notification creation and retrieval
- Real-time notifications using WebSocket (Socket.IO)
- Message queuing with RabbitMQ
- Swagger API documentation
- Role-based access control (RBAC)
- Pagination for GET endpoints
- Retry mechanism for failed message processing

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- RabbitMQ
- Socket.IO
- JSON Web Tokens (JWT)
- Swagger
- amqplib

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- RabbitMQ

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/realtime-notification-system.git
   cd realtime-notification-system```
  
2. Install dependencies:
```
npm install
```

3. Create a .env file in the root directory and add the following environment variables:
```
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
RABBITMQ_URI=amqps://<username>:<password>@b-b1dd08ad-e17b-4b72-8e1e-372691a22c4a.mq.us-east-1.amazonaws.com:5671
```

### Running the Project
1. Start the MongoDB server.

2. Start the RabbitMQ server.

3. Start the Node.js server:
```
npm start
```

4. Start the notification consumer service:
   ```npm run consumer```

5. Open http://localhost:3000 in your browser to access the application.

## API Documentation
Swagger is used to document the API. You can access the Swagger UI at:
```http://localhost:3000/api-docs```

## Project Structure
```arduino
realtime-notification-system/
│
├── public/
│   └── index.html
├── src/
│   ├── config/
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── notificationController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── user.js
│   │   └── notification.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notifications.js
│   ├── services/
│   │   └── notificationConsumer.js
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
├── Procfile
└── vercel.json
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.


### Summary

This `README.md` file provides a comprehensive guide to setting up, running, and deploying your project. It includes sections for prerequisites, installation, project structure, running the project, API documentation, and deployment instructions. 

Feel free to modify the content to better suit your specific project details and requirements. If you encounter any issues or have specific questions, feel free to ask!
