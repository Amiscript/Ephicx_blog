import User from '../Models/users.model.js'; // Import User model from models directory
import bcryptjs  from 'bcryptjs'; // Import bcrypt for password hashing
import ErrorHandler  from '../utils/Errorhandler.js'; // Import ErrorHandler from utils directory
import jwt from 'jsonwebtoken'; // Import jwt for token generation


// const signup = async (req, res,next) =>  { 
//    const {username, email, password } = req.body; // Extract username, email, and password from the request body

//     if (!username || !email || !password|| username===""||email===""||password=="") { // Check if any of the required fields are missing
//       next(ErrorHandler(500, 'All fields are required')); // Return a 400 error with a message indicating that all fields are required
//     }
//     const hashpoassword =  bcryptjs.hashSync(password, 10); // Hash the password using bcryptjs

//     const Newuser  = new User({ username, email, password:hashpoassword }); // Create a new user object with the extracted data
//   try {
//         await Newuser.save() // Save the user to the database
//        next(ErrorHandler(201, 'User created successfully')); // Return a 201 status code with a success message
//   } catch (error) {
//   next(error); // Return a 400 error with a message indicating an error 
// }}

// export const signin = async (req, res,next) =>  {
//  const {email, password } = req.body;
//  if (!email || !password) {
//   next(ErrorHandler(501, 'Invalid user')); 
//  }


//  try {
//    const user = await User.findOne({ email }); 
//  if (!user) { 
//   next(ErrorHandler(400, 'User not found')); 
//  }

 
//  const isMatch = bcryptjs.compareSync(password, user.password); 
//  if (!isMatch) { 
//   return(ErrorHandler(401, 'Invalid'));
//  }

// const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//  res.status(200).cookies('access_token', jwtToken, { httpOnly: true, secure: true }).json(user);

// }

//  catch (error) {
//   next(error); 
  
//  }


// }




// export default signup; 

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || email === "" || password === "") {
       next(ErrorHandler(400, 'All fields are required')); // Use 400 for bad request
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' }); // Send success response
    } catch (error) {
      return  next(error); // Pass error to the error handler middleware
    }
};
export default signup;


