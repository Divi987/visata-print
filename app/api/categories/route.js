import dbConn from "@/utils/dbConn";
import Category from "@/models/Category"
import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';

export async function GET() {
    try {
        const categories = await Category.find();

        return successResponseHandler(categories);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}

export async function POST(request) {
    const body = await request.json();

    try {
        const category = new Category({
            name: body.name,
            description: body.description,
            image: body.image ?? null,
            video: body.video ?? null,
            parentId: body.parentId ?? null,
            level: body.level ?? 0,
            slug: body.slug ?? null,
            path: body.path ?? null,
            isFeatured: body.isFeatured,
            isTopPick: body.isTopPick
        });

        await category.save();

        return successResponseHandler(category);
    } catch(error) {
        return errorResponseHandler(error.message);
    }
}
