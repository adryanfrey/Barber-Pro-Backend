import prismaClient from "../../prisma";

interface EditBarberProps{
    barber_id: string
    name: string
    status: boolean
}

export default class EditBarberService{
    async execute({barber_id, name, status}: EditBarberProps){

        const barber = await prismaClient.barber.update({
            where: {
                id: barber_id
            },
            data: {
                name,
                status: status
            }
        })


        return barber
    }
}