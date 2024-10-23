import dbConn from "@/utils/dbConn";
import Category from "@/models/Category"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

/*
 *  Note the successResponseHandler and errorResponseHandler functions are reusable response handlers I am importing from a utility class.
 *   Ctrl + click on the function to see where they are defined.
 */
export async function GET(request, {params}) {
    try {
        const {id} = params;

        const category = await Category.findById(id);

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const body = await request.json();

        const category = await Category.findOneAndUpdate({_id: id}, body, {new: true});

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        const category = await Category.findByIdAndDelete(id);

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

