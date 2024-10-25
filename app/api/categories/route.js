import Category from "@/models/Category"
import slugify from "slugify";
import {errorResponseHandler, successResponseHandler} from '@/utils/responseHandler';

export async function GET() {
    try {
        const categories = await Category.find({});

        return successResponseHandler(categories);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    const body = await request.json();

    try {
        if(body.name) {
            const name = body.name +'-'+ Date.now();
            body.slug = slugify(name, {lower: true, trim: true, replacement: '-'});
        }

        const category = await Category.create(body);

        return successResponseHandler(category);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}
