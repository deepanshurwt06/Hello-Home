import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req,res,next) => {
   
    const {username,email,password} = req.body;
    const hashedPassword = await bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});

    try {
        await newUser.save();
        res.status (201).json({
            message:"user created successfully"
        });  
    } catch (error) {
        next(error);
    }
   
};

export const signIn = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
      const validUser = await User.findOne({email});
      if(!validUser){
        return next(errorHandler(404,"user not found"));
      }
      const validPasssword = await bcryptjs.compare(password,validUser.password);
      if(!validPasssword){
        return next(errorHandler(400,"invalid password or username"));
      }
      const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest} = validUser._doc;
      res
      .cookie("access_token",token, {httpOnly:true})
      .status(200)
      .json(validUser);
    }catch(err){
        next(err);
    }
}