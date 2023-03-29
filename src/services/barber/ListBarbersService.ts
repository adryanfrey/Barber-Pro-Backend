import prismaClient from "../../prisma";

interface ListBarbersProps{
    user_id: string
}

export default class ListBarbersService{
    async execute({user_id}: ListBarbersProps) {

        const barbers = await prismaClient.barber.findMany({
            where: {
                user_id: user_id
            }
        })

        return barbers
    }
}