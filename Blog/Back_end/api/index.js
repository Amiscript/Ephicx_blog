 import  express from 'express';
 import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 import cors from 'cors';
 import userRoutes from './Routes/user.routes.js'; // Import user routes
 import authRoutes from './Routes/auth.route.js'; // Import auth routes
 import cookieParser from 'cookie-parser'; // Import cookie parser middleware



 const app = express();


 
 app.use(cookieParser());
 
 app.use(cors()); // Use CORS middleware


 app.use(express.json() ); // Use JSON middleware

 
 dotenv.config(); // Load environment variables from .env file


  // Connect to MongoDB

 mongoose
 .connect(process.env.MONGODB)
 .then(() => {
                console.log('Connected to MongoDB')
                }).catch((err) => {
                    console.error('Error connecting to MongoDB', err)
                });


 app.use('/api/users', userRoutes); // Use user routes
 app.use('/api/auth', authRoutes); // Use auth routes



 app.use((err, req, res, next) =>{
  const statusCode = err.status || 500; // Set status code to 500 if not provided
  const message = err.message || 'Internal Server Error'; // Set error message to 'Internal Server Error' if not provided
  res.status(statusCode).json({ succes: false, message,statusCode }); // Send response with status code and error message
}) 
 app.listen(3000, () => { 
     console.log('Server is running on port 3000') 
    });
