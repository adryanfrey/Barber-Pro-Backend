import prismaClient from "../../prisma";

interface CreateServiceProps{
    name: string
    price: number 
    user_id: string
}

export default class CreateServiceService{
    async execute({name, price, user_id}){

        const service = await prismaClient.service.create({
            data: {
                name,
                price,
                status: true,
                user_id
            }
        })

        return service
    }
}