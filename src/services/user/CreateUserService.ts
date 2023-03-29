import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserProps {
    name: string
    email: string
    password: string
    address: string
}

export default class CreateUserService{
    async execute({name, email, password, address}: UserProps){

        if (email === '' || email === undefined) {
            throw new Error('Invalid Email')
        }

        if (name === '' || name === undefined) {
            throw new Error('Invalid name')
        }

        if (password === '' || password === undefined) {
            throw new Error('Invalid password')
        }

        const emailAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (emailAlreadyExist) {
            throw new Error('Email already registered')
        }

        const hashPassword = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: hashPassword,
                address: address
            },
            select: {
                name: true, 
                email: true,
                address: true,
                id: true
            }
        })

        return user



    }
}