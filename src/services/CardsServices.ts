import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
}

class CardsServices {
    async createCustomer({ name, email }: CreateCustomerProps) {

        if(!name || !email) {
            throw new Error("Name or email is missing");
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        });

        return customer;
    }
}

export { CardsServices };