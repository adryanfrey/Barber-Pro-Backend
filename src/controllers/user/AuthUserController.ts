import AuthUserService from "../../services/user/AuthUserService";
import { Request, Response } from "express";

export default class AuthUserController{
    async handle(req: Request, res: Response) {

        const {email, password} = req.body

        const authService = new AuthUserService()

        const auth = await authService.execute({email, password})

        return res.json(auth)
    }
}