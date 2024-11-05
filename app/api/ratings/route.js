import dbConn from "@/utils/dbConn";
import Rating from "@/models/Rating"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const ratings = await Rating.find({});

        return successResponseHandler(ratings);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const rating = await Rating.create(body);

        return successResponseHandler(rating);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
