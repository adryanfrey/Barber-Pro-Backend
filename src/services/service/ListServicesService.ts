import prismaClient from "../../prisma";

interface ListServicesProps{
    user_id: string
}

export default class ListServicesService{
    async execute({user_id}: ListServicesProps){

        const services = await prismaClient.service.findMany({
            where: {
                user_id: user_id,
            }
        })

        return services
    }   
}