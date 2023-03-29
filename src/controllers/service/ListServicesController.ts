import { Request, Response } from "express";
import ListServicesService from "../../services/service/ListServicesService";

export default class ListServicesControllers {
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listServices = new ListServicesService()

        const services = await listServices.execute({user_id})

        return res.json(services)
    }
}