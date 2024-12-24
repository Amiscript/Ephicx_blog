import User from '../Models/users.model.js'; // Import User model from models directory
import bcryptjs  from 'bcryptjs'; // Import bcrypt for password hashing
import ErrorHandler  from '../utils/Errorhandler.js'; // Import ErrorHandler from utils directory
import jwt from 'jsonwebtoken'; // Import jwt for token generation



const google = async(req, res, next) => {  
  const {name, email, googlePhotoUrl} = req.body; // Extract username, email, and password from the request body
  try {
     const user = await User.findone({email})
     if(user){
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        const {password, ...rest} = user._doc;
        res.status(200).cookies('access_token', token, { httpOnly: true, secure: true }).json(rest);
     } else{
        const generatedPassword = Math.random().toString(36).substring(-8);
        const hashedPassword= bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({username:name.toLowerCase().split(' ').join('')+ Math.random().toString(9).slice(-4), email, password:hashedPassword, profilePicture:googlePhotoUrl,

        });
        await newUser.save();
        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        const {password, ...rest} = newUser._doc;
        res.status(200).cookies('access_token', token, { httpOnly: true, secure: true }).json(rest);
     } 
    
  } catch (error) {
    
  }
}

export default google;
