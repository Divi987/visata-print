import dbConn from "@/utils/dbConn";
import Category from "@/models/Category"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

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
        const category = new Category(body);

        await category.save();

        return successResponseHandler(category);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}
