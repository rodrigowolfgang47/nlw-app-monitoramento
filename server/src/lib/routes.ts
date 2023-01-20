import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './prisma'

export async function appRoutes(app:FastifyInstance) {
    app.post('/habits', async (request) => {
        /* zod recebe a request e trataverificando
        o tipo dos paramentos posttados */

        const createHabitBody = z.object({
            title: z.string(),

            /* recebe um array onde é um número
            minimo de 0 e máximo de 6 */
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        
        // recebe os parametros title e weekDays
        const { title, weekDays } = createHabitBody.parse(request.body)
    });  
} 