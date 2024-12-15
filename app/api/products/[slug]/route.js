import dbConn from "@/utils/dbConn";
import Product from "@/models/Product"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import {upload, destroy} from "@/utils/fileHandler";

export async function GET(request, {params}) {
    try {
        const {slug} = params;

        const product = await Product.find({slug: slug});

        return successResponseHandler(product);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {slug} = params;
        const product = await Product.findOne({slug: slug});

        const body = await request.formData();
        const productObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            productObj[key] = value;
        }

        // check if an image exists
        if(productObj.image) {
            // getting the image file
            const image = body.get('image');

            // checking if the product has an image
            if(product.image) {
                await destroy(product.image.public_id);
            }

            // uploading the image file to cloudinary
            const result = await upload(image);

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the image object into the body
            productObj.image = result.data;
        }

        // check if a video exists
        if(productObj.video) {
            // getting the video file
            const video = body.get('video');

            // checking if the product has a video
            if(product.video) {
                await destroy(product.video.public_id);
            }

            // uploading the video file to cloudinary
            const result = await upload(video, 'video');

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the video object into the body
            productObj.video = result.data;
        }

        const updatedProduct = await Product.findOneAndUpdate(
            {slug: slug},
            productObj,
            {new: true}
        );

        return successResponseHandler(updatedProduct);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {slug} = params;

        const product = await Product.find({slug: slug});

        if(product.image) {
            await destroy(product.image.public_id);
        }

        if(product.video) {
            await destroy(product.video.public_id);
        }

        await product.delete();

        return successResponseHandler(product, 'Record deleted successfully.');
    } catch(error){
        return errorResponseHandler(error.message);
    }
}
