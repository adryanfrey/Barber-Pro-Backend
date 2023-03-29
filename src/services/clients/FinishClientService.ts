import prismaClient from "../../prisma";

interface FinishClientProps{
    client_id: string
}

export default class FinishClientService{
    async execute({client_id}: FinishClientProps){

        if (!client_id){
            throw new Error('Invalid client id')
        }
        
        const client = await prismaClient.client.update({
            where: {
                id: client_id
            },
            data: {
                status: true
            }
        })

        return client
    }
}