import { isValidObjectId } from "mongoose";
import { Company } from "../interfaces/company.interface";
import ItemModel from "../models/item.model";

const insertItem = async (item: Company) => {
    const responseInsertItem = await ItemModel.create(item)
    return responseInsertItem;

}

const findAllItems = async () => {
    const responseItems = await ItemModel.find({})
    return responseItems;
}

const findOneItem = async (id:string) =>{
    if( !isValidObjectId(id)) return {}
    const item =await ItemModel.findOne({_id:id})
    console.log(item);
    return item
}

const updateOneItem = async (id:string,data:Company) =>{
    const item = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return item
}

const deleteOneItem =async (id:string) => {
    const item = await ItemModel.findOneAndDelete({_id:id})
    console.log(item);
    return item
    
}



export { insertItem, findAllItems,findOneItem, updateOneItem, deleteOneItem }