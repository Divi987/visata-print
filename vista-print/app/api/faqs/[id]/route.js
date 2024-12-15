import dbConn from "@/utils/dbConn";
import Faq from "@/models/Faq"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const faq = await Faq.findById(id);

        return successResponseHandler(faq);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const faq = await Faq.findOneAndUpdate(
            {_id: id},
            body,
            {new: true}
        );

        return successResponseHandler(faq);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        await Faq.findByIdAndDelete(id);

        return successResponseHandler(null);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
