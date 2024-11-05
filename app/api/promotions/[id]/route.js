import dbConn from "@/utils/dbConn";
import Promotion from "@/models/Promotion"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const promotion = await Promotion.findById(id);

        return successResponseHandler(promotion);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const promotion = await Promotion.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(promotion);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Promotion.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
