import prismaClient from "../../prisma";

interface UserProps {
    user_id: string
}

export default class UserDetailsServices{
    async execute({user_id}: UserProps) {

        if (!user_id){
            throw new Error('Invalid user')
        }

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                email: true,
                name: true,
                address: true,
                created_at: true,
                updated_at: true
            }
        })

        if (!user){
            throw new Error('User not found')
        }

        return user
    }
}