import { Request, Response } from "express";
import AddClientService from "../../services/clients/AddClientService";

export default class AddClientController{
    async handle(req: Request, res: Response) {

        const user_id = req.user_id
        const {name, schedule, service_id, time, barber_id} = req.body

        const addClient = new AddClientService()

        const client = await addClient.execute({user_id, name, schedule, service_id, barber_id})

        return res.json(client)
    }

}
