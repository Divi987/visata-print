import dbConn from "@/utils/dbConn";
import Category from "@/models/Category"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

/*
 *  Note the successResponseHandler and errorResponseHandler functions are reusable response handlers I am importing from a utility class.
 *   Ctrl + click on the function to see where they are defined.
 */
export async function GET(request, {params}) {
    try {
        const {slug} = params;

        const category = await Category.find({slug: slug});

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {slug} = params;
        const body = await request.json();

        const category = await Category.findOneAndUpdate({slug: slug}, body, {new: true});

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {slug} = params;

        const category = await Category.find({slug: slug});
        await category.delete();

        return successResponseHandler(category, 'Record deleted successfully.');
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

