import { Schema, model, Model, Types } from "mongoose";
import { Company } from "../interfaces/company.interface";

const ItemSchema = new Schema<Company>({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    size: {
        type: Number,
        min: 1,
        required: true

    },
    industry: {
        type: String,
        required: true,
        lowercase: true

    },
    location: {
        type: String,
        required: true,
        lowercase: true

    },
    companyType: {
        type: String,
        enum: ["freelance", "society"],
        required: true,
        lowercase: true

    },
    nif: {
        type: String,
        required: false,
        lowercase: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const ItemModel = model("items", ItemSchema)

export default ItemModel