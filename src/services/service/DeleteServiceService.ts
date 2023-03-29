import prismaClient from "../../prisma";

interface DeleteServiceProps{
    service_id: string
}

export default class DeleteServiceService {
    async execute({service_id}: DeleteServiceProps){

        const service = await prismaClient.service.delete({
            where: {
                id: service_id
            }
        })

        return service
    }
}