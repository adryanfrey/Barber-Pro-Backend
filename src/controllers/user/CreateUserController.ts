import { Request, Response } from "express";
import CreateUserService from "../../services/user/CreateUserService";

export default class CreateUserController {
    async handle(req: Request, res: Response) {

        const {name, email, password, address} = req.body

        const userService = new CreateUserService()

        const user = await userService.execute({name, email, password, address})

        return res.json(user)
    }
}