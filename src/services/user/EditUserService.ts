import prismaClient from "../../prisma";

interface EditUserProps{
    user_id: string
    name: string
    address: string
}

export default class EditUserService{
    async execute({user_id, name, address}: EditUserProps){

        if (!name){
            throw new Error('Invalid name')
        }

        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name: name,
                address: address
            }
        })

        return user
    }
}