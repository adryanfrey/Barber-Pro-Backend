import { Request, Response } from "express";
import EditServiceService from "../../services/service/EditServiceService";

export default class EditServiceController{
    async handle(req: Request, res: Response){

        const {service_id, name, price, status} = req.body

        const editService = new EditServiceService()

        const service = await editService.execute({service_id, name, price, status})

        return res.json(service)
    }
}
