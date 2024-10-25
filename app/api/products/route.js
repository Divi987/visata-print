import dbConn from "@/utils/dbConn";
import Product from "@/models/Product"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import slugify from "slugify";

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
        if(body.name) {
            const name = body.name +'-'+ Date.now();
            body.slug = slugify(name, {lower: true, trim: true, replacement: '-'});
        }

        const product = await Product.create(body);

        return successResponseHandler(product);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
