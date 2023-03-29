import prismaClient from "../../prisma";

interface EditServiceProps{
    service_id: string 
    name: string
    price: number
    status: boolean
}

export default class EditServiceService{
    async execute({name, price, service_id, status}: EditServiceProps){

        const service = await prismaClient.service.update({
            where: {
                id: service_id
            },
            data: {
                name: name,
                price: price,
                status: status
            }
        })

        return service
    }
}