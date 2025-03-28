import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,     
    },
    profilePicture : {
        type: String,
        default: "https://up.yimg.com/ib/th?id=OIP.Od4m4w455EEToOQDKESqvgHaFJ&pid=Api&rs=1&c=1&qlt=95&w=161&h=111",
    },
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;