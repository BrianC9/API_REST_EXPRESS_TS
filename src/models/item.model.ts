import { Schema, model, Model, Types } from "mongoose";
import { Company } from "../interfaces/company.interface";

const ItemSchema = new Schema<Company>({
    name: {
        type:String,
        required:true
    },
    size:{
        type:Number,
        min:1
    },
    industry:{
        type:String
    },
    location: {
        type:String
    },
    companyType: {
        type:String,
        enum: ["freelance", "society"]
    },
    nif:{
        type:String,
        required:false
    }
},{
    timestamps:true,
    versionKey:false
})

const ItemModel = model("items",ItemSchema)

export default ItemModel