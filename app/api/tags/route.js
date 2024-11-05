import dbConn from "@/utils/dbConn";
import Tag from "@/models/Tag"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const tags = await Tag.find({});

        return successResponseHandler(tags);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const tag = await Tag.create(body);

        return successResponseHandler(tag);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
