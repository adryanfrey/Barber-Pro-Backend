import prismaClient from "../../prisma";

interface ListClientsProps {
    user_id: string
}

export default class ListClientsService{
    async execute({user_id}: ListClientsProps){

        const clients = await prismaClient.client.findMany({
            where: {
                user_id: user_id,
            },
            include: {
                service: true,
                barber: true
            }
        })

        return clients
    }
}   