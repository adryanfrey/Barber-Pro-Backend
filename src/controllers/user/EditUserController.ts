import { Request, Response } from "express";
import EditClientService from "../../services/clients/EditClientService";
import EditUserService from "../../services/user/EditUserService";

export default class EditUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id
        const {name, address} = req.body
        
        const editUSer = new EditUserService()

        const user = await editUSer.execute({user_id, name, address})

        return res.json(user)
    }
}