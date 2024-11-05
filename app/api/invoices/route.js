import dbConn from "@/utils/dbConn";
import Invoice from "@/models/Invoice"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const invoices = await Invoice.find({});

        return successResponseHandler(invoices);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const invoice = await Invoice.create(body);

        return successResponseHandler(invoice);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
