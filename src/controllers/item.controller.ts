import { Request, Response } from "express"
import { handleHttpError } from "../utils/error.handle"
import { findAllItems, findOneItem, insertItem } from "../services/item.service"
import { Company } from "../interfaces/company.interface"
const getItems = async (req: Request, res: Response) => {
    try {
        const items = await findAllItems()
        if (items.length === 0) res.status(204)
        res.send(items)

    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM[S]")
    }
}
const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const item =await findOneItem(id) as Company | {}
        if (item == null) return res.status(404).send()
        if (Object.keys(item).length === 0) return res.status(400).send()
            res.send(item)
        


    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM", error)
    }
}

const createItem = async (req: Request, res: Response) => {
    try {

        const { body } = req
        const itemCreated =  await insertItem(body)
        res.status(201).send(itemCreated)

    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM",error)
    }

}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM",error)
    }

}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM",error)
    }
}

export { getItems, getItem, createItem, updateItem, deleteItem }