import { FastifyReply, FastifyRequest } from "fastify";
import { DecksServices } from "../services/DecksServices";


class DecksController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.query as { id: string };

        const decksServicesService = new DecksServices();
        const resBody = await decksServicesService.deleteCustomer({ id });

        return res.send(resBody);

    }

}

export { DecksController };