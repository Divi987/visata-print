import dbConn from "@/utils/dbConn";
import Transaction from "@/models/Transaction"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const transactions = await Transaction.find({});

        return successResponseHandler(transactions);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const transaction = await Transaction.create(body);

        return successResponseHandler(transaction);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
