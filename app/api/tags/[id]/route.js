import dbConn from "@/utils/dbConn";
import Tag from "@/models/Tag"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const tag = await Tag.findById(id);

        return successResponseHandler(tag);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const tag = await Tag.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(tag);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Tag.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
