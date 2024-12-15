import dbConn from "@/utils/dbConn";
import Project from "@/models/Project";
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import slugify from "slugify";
import {upload} from '@/utils/fileHandler';

export async function GET(request, {params}) {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const categoryId = url.searchParams.get('categoryId');
    const isBestSeller = url.searchParams.get('isBestSeller')
;    try {
        let filtered = {};
        
        const projects = await Project.find({});

        return successResponseHandler(projects);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.formData();
        let projectObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            projectObj[key] = value;
        }

        // generate the category slug from the name
        if(projectObj.name) {
            const name = projectObj.name +'-'+ Date.now();
            projectObj.slug = slugify(name, {lower: true, trim: true, replacement: '-'});
        }

        // check if an image exists
        if(projectObj.image) {
            // getting the image file
            const image = body.get('image');

            // uploading the image file to cloudinary
            const result = await upload(image);

            // checking if the upload failed
            if(result.statusCode === 1) {
                return errorResponseHandler(result.message);
            }

            // setting the image object into the body
            projectObj.image = result.data;
        }

        // check if a video exists
        // if(projectObj.video) {
        //     // getting the video file
        //     const video = body.get('video');

        //     // uploading the video file to cloudinary
        //     const result = await upload(video, 'video');

        //     // checking if the upload failed
        //     if(result.statusCode === 1) {
        //         return errorResponseHandler(result.message);
        //     }

        //     // setting the video object into the body
        //     projectObj.video = result.data;
        // }

        const project = await Project.create(projectObj);

        return successResponseHandler(project);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
