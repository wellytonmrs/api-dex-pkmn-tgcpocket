import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CardsController } from "./controllers/CardsController";
import { DecksController } from "./controllers/DecksController";
import { UsersController } from "./controllers/UsersController";


export async function routes(fastify: FastifyInstance, opt: FastifyPluginOptions) {

    fastify.get("/ownedCards", async (req: FastifyRequest, res: FastifyReply) => {
        return new CardsController().handle(req, res);
    });

    fastify.get("/filterCards", async (req: FastifyRequest, res: FastifyReply) => {
        return new CardsController().handle(req, res);
    });

    fastify.post("/card", async (req: FastifyRequest, res: FastifyReply) => {
        return new CardsController().handle(req, res);
    });

    /* ------------------------------- */

    fastify.get("/sysDecks", async (req: FastifyRequest, res: FastifyReply) => {
        return new DecksController().handle(req, res);
    });

    fastify.get("/userDecks", async (req: FastifyRequest, res: FastifyReply) => {
        return new DecksController().handle(req, res);
    });


    fastify.post("/decks", async (req: FastifyRequest, res: FastifyReply) => {
        return new DecksController().handle(req, res);
    });

    /* ------------------------------- */

    fastify.post("/user", async (req: FastifyRequest, res: FastifyReply) => {
        return new UsersController().handle(req, res);
    });

}