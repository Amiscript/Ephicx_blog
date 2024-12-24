 import mongoose from "mongoose";

 // Define the User schema
 const UserSchema = new mongoose.Schema({
     username: 
     { 
        type: String,
        unique: true },

     email: { 
        type: String, 
         unique: true ,},

     password: {
         type: String,
         required: true, },

     profilePicture:{
        type: String,
       default: "https://www.google.com/imgres?q=profileimage&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1223671392%2Fvector%2Fdefault-profile-picture-avatar-photo-placeholder-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Ds0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&docid=pPEBSGoly6MFPM&tbnid=gyeVwThYK-cEWM&vet=12ahUKEwjO9fWjuL2KAxUgVUEAHWevATUQM3oECGEQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwjO9fWjuL2KAxUgVUEAHWevATUQM3oECGEQAA" },
     
     

  
 }, {timestamps: true }); // Add timestamps to the User model
 // Create the User model
 const User = mongoose.model("User", UserSchema);

 export default User;