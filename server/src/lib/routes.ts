import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './prisma'
import dayjs from 'dayjs'

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

        // Cria uma nova data começando no dai de hj, zerando a data de criação
        const today = dayjs().startOf('day').toDate()

        // Persistindo dados recebidos na tabela
        await prisma.habit.create({
            data :{
                title,
                created_at: today,

                /* Aqui criamos uma um dado dentro da tabela relacional weekDays,
                onde estão os dados da semana */
                
                weekDays: {
                    create: weekDays.map(weekDays => {
                        return {
                            week_day: weekDays,
                        }
                    })
                }

            }
        })
    });  
} 