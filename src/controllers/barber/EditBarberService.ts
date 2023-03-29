import { Request, Response } from "express";
import EditBarberService from "../../services/barber/EditBarberService";

export default class EditBarberController{
    async handle(req: Request, res: Response){

        const {barber_id, name, status} = req.body

        const editBarber = new EditBarberService()

        const barber = editBarber.execute({barber_id, name, status})

        return res.json(barber)
    }
}