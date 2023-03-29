import { Request, Response } from "express";
import FinishClientService from "../../services/clients/FinishClientService";

export default class FinishClientController{
    async handle(req: Request, res: Response){

        const {client_id} = req.body

        const finishClient = new FinishClientService()

        const client = await finishClient.execute({client_id})

        return res.json(client)
    }
}