import { Request, Response } from "express";
import ListBarbersService from "../../services/barber/ListBarbersService";

export default class ListBarbersController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listBarbers = new ListBarbersService()

        const barbers = await listBarbers.execute({user_id})

        return res.json(barbers)
    }
}