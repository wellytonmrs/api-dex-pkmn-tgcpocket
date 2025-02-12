import { FastifyReply, FastifyRequest } from "fastify";
import { CardsServices } from "../services/CardsServices";

class CardsController {
    async getOwnedCards(req: FastifyRequest, res: FastifyReply) {

        const { name, email } = req.body as { name: string, email: string };

        const cardsServices = new CardsServices();
        const cards = await cardsServices.getOwnedCards({ name, email });
        return res.send(cards);
    }

    async getfilterCards(req: FastifyRequest, res: FastifyReply) {

        const { name, email } = req.body as { name: string, email: string };

        const cardsServices = new CardsServices();
        const customer = await cardsServices.getfilterCards({ name, email });
        return res.send(customer);
    }

    async registerCard(req: FastifyRequest, res: FastifyReply) {

        const { name, email } = req.body as { name: string, email: string };

        const cardsServices = new CardsServices();
        const customer = await cardsServices.registerCard({ name, email });
        return res.send(customer);
    }
}

export { CardsController };

