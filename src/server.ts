import fastyfy from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'


const app = fastyfy({ logger: true })

const start = async () => {

    await app.register(routes);
    await app.register(cors, {
        origin: true
    });

    try {
        await app.listen({ port: 3333 });
    } catch (err) {
        process.exit(1);
    }
}

start();