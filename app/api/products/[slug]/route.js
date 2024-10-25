import dbConn from "@/utils/dbConn";
import Product from "@/models/Product"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {slug} = params;

        const product = await Product.find({slug: slug});

        return successResponseHandler(product);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {slug} = params;
        const body = await request.json();

        const product = await Product.findOneAndUpdate(
            {slug: slug},
            body,
            {new: true}
        );

        return successResponseHandler(product);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {slug} = params;

        const product = await Product.find({slug: slug});
        await product.delete();

        return successResponseHandler(product, 'Record deleted successfully.');
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
