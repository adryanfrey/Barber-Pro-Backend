import { Request, Response } from "express";
import UserDetailsServices from "../../services/user/UserDetailsService";

export default class UserDetailsController{
    async handle(req: Request, res: Response){

        const {user_id} = req

        const userDetailService = new UserDetailsServices()

        const user  = await userDetailService.execute({user_id})

        return res.json(user)
    }
}