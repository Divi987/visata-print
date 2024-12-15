import dbConn from "@/utils/dbConn";
import Order from "@/models/Order"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const orders = await Order.find({});

        return successResponseHandler(orders);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const order = await Order.create(body);

        return successResponseHandler(order);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
