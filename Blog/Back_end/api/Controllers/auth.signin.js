import User from '../Models/users.model.js'; // Import User model from models directory
import bcryptjs  from 'bcryptjs'; // Import bcrypt for password hashing
import ErrorHandler  from '../utils/Errorhandler.js'; // Import ErrorHandler from utils directory
import jwt from 'jsonwebtoken'; // Import jwt for token generation


const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
         next(ErrorHandler(400, 'Invalid user')); // Use 400 for bad request
    }
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
           next(ErrorHandler(404, 'User not found')); // Use 404 for not found
        }
  
        const isMatch = bcryptjs.compareSync(password, user.password);
        if (!isMatch) {
            return (ErrorHandler(401, 'Invalid credentials')); // Use 401 for unauthorized
        }
  
        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).cookie('access_token', jwtToken, { httpOnly: true, secure: true }).json(user); // Use res.cookie()
    } catch (error) {
        next(error);
    }
  };

  export default signin; 