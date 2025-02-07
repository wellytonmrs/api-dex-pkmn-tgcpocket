import { FastifyReply, FastifyRequest } from "fastify";
import { UsersServices } from "../services/UsersServices";


class UsersController {
    async handle(req: FastifyRequest, res: FastifyReply) {

        const { name, email, password } = req.body as { name: string, email: string, password: string };

        const usersServicesService = new UsersServices();
        const resBody = await usersServicesService.registerUser({ name, email, password });

        return res.send(resBody);

    }
}

export { UsersController };

