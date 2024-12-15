import dbConn from "@/utils/dbConn";
import Project from "@/models/Project"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import {upload, destroy} from "@/utils/fileHandler";

export async function GET(request, {params}) {
    try {
        const {id} = params;

        const project = await Project.find({id: id});

        return successResponseHandler(project);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const project = await Project.findOne({id: id});

        const body = await request.formData();
        const projectObj = {};

        // getting the form data from the form data object
        for (const [key, value] of body.entries()) {
            projectObj[key] = value;
        }

        // check if an image exists
        // if(projectObj.image) {
        //     // getting the image file
        //     const image = body.get('image');

        //     // checking if the product has an image
        //     if(project.image) {
        //         await destroy(product.image.public_id);
        //     }

        //     // uploading the image file to cloudinary
        //     const result = await upload(image);

        //     // checking if the upload failed
        //     if(result.statusCode === 1) {
        //         return errorResponseHandler(result.message);
        //     }

        //     // setting the image object into the body
        //     productObj.image = result.data;
        // }

        // check if a video exists
        // if(productObj.video) {
        //     // getting the video file
        //     const video = body.get('video');

        //     // checking if the product has a video
        //     if(product.video) {
        //         await destroy(product.video.public_id);
        //     }

        //     // uploading the video file to cloudinary
        //     const result = await upload(video, 'video');

        //     // checking if the upload failed
        //     if(result.statusCode === 1) {
        //         return errorResponseHandler(result.message);
        //     }

        //     // setting the video object into the body
        //     productObj.video = result.data;
        // }

        const updatedProject = await Project.findOneAndUpdate(
            {id: id},
            projectObj,
            {new: true}
        );

        return successResponseHandler(updatedProject);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

export async function DELETE(request, {params}) {
    try {
        const {id} = params;

        const project = await Project.find({id: id});

        // if(project.image) {
        //     await destroy(project.image.public_id);
        // }

        // if(product.video) {
        //     await destroy(product.video.public_id);
        // }

        await project.delete();

        return successResponseHandler(project, 'Record deleted successfully.');
    } catch(error){
        return errorResponseHandler(error.message);
    }
}