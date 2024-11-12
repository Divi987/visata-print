import dbConn from '@/utils/dbConn';
import Category from "@/models/Category"
import slugify from "slugify";
import {errorResponseHandler, successResponseHandler} from '@/utils/responseHandler';
import {upload} from '@/utils/fileHandler';

export async function GET(req, {params}) {
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const parentId = url.searchParams.get('parentId');

            let filtered;
            if (parentId) {
              // If parentId is specified, filter by that specific parentId
              filtered = { parentId };
            } else {
              // If parentId is null or an empty string, filter for categories with empty, null, or undefined parentId
              filtered = { $or: [{ parentId: null }, { parentId: "" }, { parentId: { $exists: false } }] };
            }

        const categories = await Category.find(filtered);

        return successResponseHandler(categories);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.formData();
        let categoryObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            categoryObj[key] = value;
        }

        // generate the category slug from the name
        if(categoryObj.name) {
            const name = categoryObj.name +'-'+ Date.now();
            categoryObj.slug = slugify(name, {lower: true, trim: true, replacement: '-'});
        }

        // check if an image exists
        if(categoryObj.image) {
            // getting the image file
            const image = body.get('image');

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

            // uploading the video file to cloudinary
            const result = await upload(video, 'video');

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the video object into the body
            categoryObj.video = result.data;
        }

        const category = await Category.create(categoryObj);

        return successResponseHandler(category);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}
