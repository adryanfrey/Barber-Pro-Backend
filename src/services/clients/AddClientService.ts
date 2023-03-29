import prismaClient from "../../prisma";

interface AddClientProps {
    name: string
    schedule: Date | string
    service_id: string
    user_id: string
    barber_id
}

export default class AddClientService {
    async execute({ name, schedule, service_id, user_id, barber_id }) {

        const client = await prismaClient.client.create({
            data: {
                name,
                service_id,
                schedule,
                user_id,
                status: false,
                barber_id
            }
        })

        return client
    }
}