import dbConn from "@/utils/dbConn";
import Rating from "@/models/Rating"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const rating = await Rating.findById(id);

        return successResponseHandler(rating);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const rating = await Rating.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(rating);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Rating.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
