import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req,res,next) => {
   
    const {username,email,password} = req.body;
    const hashedPassword =  bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    const expiryDate = new Date(Date.now() + 3600000);
    try {
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
        const {password : hashedPassword,...rest} = newUser._doc;
        res
      .cookie("access_token",token, {httpOnly:true,expires:expiryDate})
      .status(200)
      .json(rest);
       
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
      const {password : hashedPassword,...rest} = validUser._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res
      .cookie("access_token",token, {httpOnly:true,expires:expiryDate}).status(200)
      .json(rest);
    }catch(err){
        next(err);
    }
}

export const google = async(req,res,next)=>{
   try {
    const user = await User.findOne({email:req.body.email});
    if(user){
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password : hashedPassword,...rest} = user._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res
      .cookie("access_token",token,{httpOnly:true,expires:expiryDate})
      .status(200)
      .json(rest);
    }else{
       const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
       const hashedPassword = await bcryptjs.hashSync(generatePassword,10);
       const newUser = new User({username :req.body.name.split(" ").join("").toLowerCase() + Math.floor(Math.random()*10000).toString() ,
        email : req.body.email,
        password:hashedPassword,
        profilePicture : req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);  
      const {password : hashedPassword2,...rest} = user._doc;    
      const expiryDate = new Date(Date.now() + 3600000);
      res
      .cookie("access_token",token, {
        httpOnly:true,
        expires:expiryDate
      })
      .status(200)
      .json(rest);


    }
   } catch (error) {
    
   }
}

export const signOut = (req,res)=>{
  res.clearCookie("access_token").status(200).json("user has been logged out");
}