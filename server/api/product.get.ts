import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()

    const [ activeCount, inactiveCount ] = await Promise.all([
        prisma.product.count({ where: { isAvailableForPurchase: true }}),
        prisma.product.count({ where: { isAvailableForPurchase: false }}),
    ])

    return {
        activeCount,
        inactiveCount
    }
})