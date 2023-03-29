import { Request, Response } from "express";
import EditClientService from "../../services/clients/EditClientService";

export default class EditClientController{
    async handle(req: Request, res: Response){

        const {service_id, name, schedule, client_id, barberId} = req.body

        const editClient = new EditClientService()

        const client = await editClient.execute({service_id, name, schedule, client_id, barberId})

        return res.json(client)
    }
}