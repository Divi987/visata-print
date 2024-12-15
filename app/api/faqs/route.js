import dbConn from "@/utils/dbConn";
import Faq from "@/models/FAQ"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const faqs = await Faq.find({});

        return successResponseHandler(faqs);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const faq = await Faq.create(body);

        return successResponseHandler(faq);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
