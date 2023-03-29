import prismaClient from "../../prisma";


interface AddBarberProps{
    name: string
    user_id: string
}

export default class AddBarberService {
    async execute({name, user_id}){

        if (!name || !user_id) {
            throw new Error ('Invalid values')
        }

        const barber = await prismaClient.barber.create({
            data: {
                name,
                user_id,
                status: true
            }
        })

        return barber
    }
}