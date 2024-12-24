import express from 'express';
import  signup  from '../Controllers/auth.controller.js'; // Import signup function from auth controller
import signin from '../Controllers/auth.signin.js'; // Import signin function from auth signin route
import google from '../Controllers/google.controller.js'; // Import google controller function
const route = express.Router(); // Create a new router instance

// Define a route to get all users
route.post('/signup',signup); 
route.post('/signin',signin); 
route.post('/google-signin', google ); // Add a new route for Google sign-in


export default route;

