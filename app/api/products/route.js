import dbConn from "@/utils/dbConn";
import Product from "@/models/Product"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const products = await Product.find({});

        return successResponseHandler(products);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const product = await Product.create(body);

        return successResponseHandler(product);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
