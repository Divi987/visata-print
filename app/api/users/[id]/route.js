import dbConn from "@/utils/dbConn";
import User from "@/models/User"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const user = await User.findById(id);

        return successResponseHandler(user);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const user = await User.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(user);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await User.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
