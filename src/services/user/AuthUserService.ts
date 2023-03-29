import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthProps {
    email: string
    password: string
}

export default class AuthUserService {
    async execute({ email, password }: AuthProps) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Email not found')
        }

        const verifyPassword = await compare(password, user.password)

        if (!verifyPassword) {
            throw new Error('Incorret password')
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            token
        }
    }
}