import {errorResponseHandler, successResponseHandler} from "@/utils/responseHandler";
import {upload, destroy} from '@/utils/fileHandler';

export async function POST(request) {
    const body = await request.formData();
    const file = body.get('file');

    if (!file) {
        return errorResponseHandler('No file uploaded');
    }

    try {

        const result = await upload(file);

        if(result.statusCode === 1) {
            return errorResponseHandler(result.message);
        }

        return successResponseHandler(result.data);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}
