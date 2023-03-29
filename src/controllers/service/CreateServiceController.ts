import { Request, Response } from "express";
import CreateServiceService from "../../services/service/CreateServiceService";

export default class CreateServiceController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id
        const {name, price} = req.body

        const createService = new CreateServiceService()

        const service = await createService.execute({name, price, user_id})

        return res.json(service)
    }
}