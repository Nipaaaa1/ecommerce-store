import { PrismaClient } from "@prisma/client"


export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()
    const [userCount, orderData] = await Promise.all([
        prisma.user.count(),
        prisma.order.aggregate({
            _sum: {pricePaidInCents: true}
        })
    ])
    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount / 100
    }
})