import { FastifyRequest, FastifyReply } from "fastify";
import { CardsServices } from "../services/CardsServices";

class CardsController {
    async handle(req: FastifyRequest, res: FastifyReply) {

        const { name, email } = req.body as { name: string, email: string };

        const cardsServices = new CardsServices();
        const customer = await cardsServices.createCustomer({ name, email });
        return res.send(customer);
    }
}

export { CardsController };