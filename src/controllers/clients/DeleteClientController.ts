import { Request, Response } from "express";
import DeleteClientService from "../../services/clients/DeleteClientService";

export default class DeleteClientController {
    async handle(req: Request, res: Response){

        const client_id = req.query.client_id

        const deleteClient = new DeleteClientService()

        const client = await deleteClient.execute({client_id})

        return res.json(client)
    }
}