import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()
    const data = await prisma.order.aggregate({
        _sum: { pricePaidInCents: true },
        _count: true
    })

    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
    }
})