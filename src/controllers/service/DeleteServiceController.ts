import { Request, Response } from "express";
import DeleteServiceService from "../../services/service/DeleteServiceService";

export default class DeleteServiceController {
    async handle(req: Request, res: Response){

        const service_id = req.query.service_id as string

        const deleteService = new DeleteServiceService()

        const service = await deleteService.execute({service_id})

        return res.json(service)

    }
}