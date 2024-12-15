import dbConn from "@/utils/dbConn";
import Transaction from "@/models/Transaction"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const transaction = await Transaction.findById(id);

        return successResponseHandler(transaction);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const transaction = await Transaction.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(transaction);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Transaction.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
