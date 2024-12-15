import dbConn from "@/utils/dbConn";
import Sitesetting from "@/models/SiteSetting"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const sitesettings = await Sitesetting.find({});

        return successResponseHandler(sitesettings);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const sitesetting = await Sitesetting.create(body);

        return successResponseHandler(sitesetting);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
