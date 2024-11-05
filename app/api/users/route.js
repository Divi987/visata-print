import dbConn from "@/utils/dbConn";
import User from "@/models/User"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const users = await User.find({});

        return successResponseHandler(users);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const user = await User.create(body);

        return successResponseHandler(user);
    } catch (error) {
        return errorResponseHandler(error.message);
    }
}
