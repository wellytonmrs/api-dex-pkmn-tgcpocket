import prismaClient from "../prisma";


interface CreateUserProps {
    name: string;
    email: string;
    password: string
}
class UsersServices {

    async registerUser({ name, email, password }: CreateUserProps) {

        const customers = await prismaClient.customer.findMany();
        return customers;
    }
}

export { UsersServices };