import prismaClient from "../../prisma";

interface EditClientProps{
    client_id: string
    name: string
    service_id: string
    schedule: string 
    barberId: string
}

export default class EditClientService{
    async execute({client_id, name, service_id, schedule, barberId}: EditClientProps){

        const client = await prismaClient.client.update({
            where: {
                id: client_id
            },
            data: {
                name,
                service_id,
                schedule,
                barber_id: barberId
            }
        })

        return client
}}