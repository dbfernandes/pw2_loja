import { Request, Response } from "express"
import { getProducts } from "./product.service"

const index = async (req: Request, res: Response) => {
    const products = await getProducts()
    res.json(products)
}

const create = async (req: Request, res: Response) => {}
const read = async (req: Request, res: Response) => {}
const update = async (req: Request, res: Response) => {}
const remove = async (req: Request, res: Response) => {}

export default { index, create, read, update, remove }