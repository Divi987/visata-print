import dbConn from "@/utils/dbConn";
import Sitesetting from "@/models/Sitesetting"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const sitesetting = await Sitesetting.findById(id);

        return successResponseHandler(sitesetting);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const sitesetting = await Sitesetting.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(sitesetting);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Sitesetting.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
