import { Company } from "../interfaces/company.interface";
import ItemModel from "../models/item.model";

const insertItem = async (item: Company) => {
    const responseInsertItem = await ItemModel.create(item)
    return responseInsertItem;

}

export {insertItem}