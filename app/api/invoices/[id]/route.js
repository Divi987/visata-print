import dbConn from "@/utils/dbConn";
import Invoice from "@/models/Invoice"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const invoice = await Invoice.findById(id);

        return successResponseHandler(invoice);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const invoice = await Invoice.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(invoice);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Invoice.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
