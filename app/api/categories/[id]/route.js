// import dbConn from '@/utils/dbConn';
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

import { successResponseHandler, errorResponseHandler } from '@/utils/responseHandler';
import mongoose from 'mongoose';
const ProductCategoryModel = mongoose.models.ProductCategory || require('../../../../models/ProductCategory');

/*
 *  Note the successResponseHandler and errorResponseHandler functions are reusable response handlers I am importing from a utility class.
 *   Ctrl + click on the function to see where they are defined.
 */
export async function GET(request, {params}) {
    try {
        const {id} = params;

        const category = await prisma.category.findUnique({
           where: {
               id: id
           }
        });

        return successResponseHandler(category);
    } catch(error){
        return errorResponseHandler(error.message);
    }
}

