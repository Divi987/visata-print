import dbConn from "@/utils/dbConn";
import Product from "@/models/Product";
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import slugify from "slugify";
import {upload} from '@/utils/fileHandler';

export async function GET() {
    try {
        const products = await Product.find({});

        return successResponseHandler(products);
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

        // generate the category slug from the name
        if(productObj.name) {
            const name = productObj.name +'-'+ Date.now();
            productObj.slug = slugify(name, {lower: true, trim: true, replacement: '-'});
        }

        // check if an image exists
        if(productObj.image) {
            // getting the image file
            const image = body.get('image');

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

            // uploading the video file to cloudinary
            const result = await upload(video, 'video');

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the video object into the body
            productObj.video = result.data;
        }

        const product = await Product.create(productObj);

        return successResponseHandler(product);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
