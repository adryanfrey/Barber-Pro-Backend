import prismaClient from "../../prisma";

interface DeleteClientProps{
    client_id: string
}

export default class DeleteClientService {
    async execute({client_id}){

        const client = await prismaClient.client.delete({
            where: {
                id: client_id
            }
        })

        return client 
    }
}