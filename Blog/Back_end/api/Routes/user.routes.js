import express from 'express';
import  user  from '../Controllers/user.controller.js';

const route = express.Router(); // Create a new router instance

// Define a route to get all users
route.get('/users', user); 
// Send a response with the message

export default route;
