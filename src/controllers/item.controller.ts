import { Request, Response } from "express"
import { handleHttpError } from "../utils/error.handle"
import { insertItem } from "../services/item.service"
const getItems = (req: Request, res: Response) => {
    try {
        res.send(`Request to ${req.path}`)

    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM[S]")
    }
}
const getItem = (req: Request, res: Response) => {
    try {
        throw new Error("error inesperado")
        const { id } = req.params
        console.log(req.path);
        res.send(`Searching item with id: ${id}`)


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
        handleHttpError(res, "ERROR_CREATE_ITEM")
    }

}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM")
    }

}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}

export { getItems, getItem, createItem, updateItem, deleteItem }