import dbConn from "@/utils/dbConn";
import Category from "@/models/Category"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import slugify from "slugify";
import {upload, destroy} from "@/utils/fileHandler";

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
        let category = await Category.findOne({slug: slug});

        const body = await request.formData();
        const categoryObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            categoryObj[key] = value;
        }

        // check if an image exists
        if(categoryObj.image) {
            // getting the image file
            const image = body.get('image');

            // checking if the category has an image
            if(category.image) {
                await destroy(category.image.public_id);
            }

            // uploading the image file to cloudinary
            const result = await upload(image);

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the image object into the body
            categoryObj.image = result.data;
        }

        // check if a video exists
        if(categoryObj.video) {
            // getting the video file
            const video = body.get('video');

            // checking if the category has a video
            if(category.video) {
                await destroy(category.video.public_id);
            }

            // uploading the video file to cloudinary
            const result = await upload(video, 'video');

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the video object into the body
            categoryObj.video = result.data;
        }

        const updatedCategory = await Category.findOneAndUpdate({slug: slug}, categoryObj, {new: true});

        return successResponseHandler(updatedCategory);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {slug} = params;

        const category = await Category.find({slug: slug});

        if(category.image) {
            await destroy(category.image.public_id);
        }

        if(category.video) {
            await destroy(category.video.public_id);
        }

        // Todo: Add delete for related products.

        await category.delete();

        return successResponseHandler(category, 'Record deleted successfully.');
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

