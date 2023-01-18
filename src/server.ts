import Fastify from "fastify";
import {PrismaClient} from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.get('/', async (req) => {
    const habitos =  await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    });

    return habitos;
});

app.listen({
    port:3333,
}).then(()=>{
    console.log("HTTP serve runing");
});