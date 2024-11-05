import dbConn from "@/utils/dbConn";
import Promotion from "@/models/Promotion"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const promotions = await Promotion.find({});

        return successResponseHandler(promotions);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const promotion = await Promotion.create(body);

        return successResponseHandler(promotion);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
