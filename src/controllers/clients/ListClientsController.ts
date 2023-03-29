import { Request, Response } from "express";
import ListClientsService from "../../services/clients/ListClientsService";

export default class ListClientsController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const clientsService =  new ListClientsService()

        const clients = await clientsService.execute({user_id})

        return res.json(clients)
    }
} 
