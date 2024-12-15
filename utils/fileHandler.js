import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream';

async function upload(file, resource_type = 'image') {
    try {
        // convert blob object into buffer
        const buffer = await file.arrayBuffer();

        // convert buffer to stream
        const stream = Readable.from(Buffer.from(buffer));

        // uploading the file via a stream
        const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'test_vista', resource_type},
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            // create the stream
            stream.pipe(uploadStream);
        });

        return {
            statusCode: 0,
            data: uploadResponse
        }

    } catch (error) {

        return {
            statusCode: 1,
            'message': error.message,
        }
    }
}

async function destroy(public_id)
{
    try {
        const deleteResponse = await cloudinary.uploader.destroy(public_id);

        return {
            statusCode: 0,
            data: deleteResponse
        }

    } catch (error) {
        return {
            statusCode: 1,
            'message': error.message,
        }
    }
}

module.exports = {upload, destroy};
