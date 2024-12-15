import ProductCategory from "@/models/ProductCategory";
import { errorResponseHandler, successResponseHandler } from "@/utils/responseHandler";

export async function GET(request, {params}) {
    console.log(request, params);
    const categoryId = params;
    try {
        const productCategory = await ProductCategory.find({})
        

        console.log(productCategory);

        return successResponseHandler(productCategory);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.formData();
        let productObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            productObj[key] = value;
        }

        const productCategory = await ProductCategory.create(productObj);

        return successResponseHandler(productCategory);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
