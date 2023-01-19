import Fastify from "fastify";
import cors from "@fastify/cors";
import {PrismaClient} from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async (req) => {
    const habitos =  await prisma.habit.findMany();

    return habitos;
});

app.listen({
    port:3333,
}).then(()=>{
    console.log("HTTP serve runing");
});