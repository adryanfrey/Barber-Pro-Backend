import { Request, Response } from "express";
import AddBarberService from "../../services/barber/AddBarberService";

export default class AddBarberController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id
        const {name} = req.body

        const addBarber = new AddBarberService()

        const barber = await addBarber.execute({name, user_id})

        return res.json(barber)
    }
}