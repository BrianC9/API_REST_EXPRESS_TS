import { Schema } from "mongoose";

 const authUserSchema = new Schema<AuthUser>({
    email:{
        type: String,
        unique: true,
        trim:true,
        lowercase:true,
        required:[true, "Email required for login"]
    }
 },{
    versionKey:false,
    timestamps:true
 })