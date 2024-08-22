import { Schema,model,models } from "mongoose";

const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true,"Email Already exist"],
        required:[true,"Email is required"]
    },
    username:{
        type:String,
        required:[true,"username is required"]
    },
    image:{
        type:String
    }
})

const User=models.user || model('user',UserSchema)
export default User;