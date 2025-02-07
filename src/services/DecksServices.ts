import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DecksServices {
    async deleteCustomer({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Id is required");
        }
        const customer = await prismaClient.customer.delete({
            where: {
                id: id
            }
        });

        if (!customer) {
            throw new Error("Customer not found");
        }

        return {message: "Customer deleted successfully"};

    }
}

export { DecksServices }