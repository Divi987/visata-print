import dbConn from '@/utils/dbConn';
const ProductCategoryModel = require('../../../../models/ProductCategory');

export async function GET(req) {
    const {id} = req.query.params
    try {
        const category = await ProductCategoryModel.findById(id);

        return Response.json({
            status: 'success',
            data: category,
        });
    } catch(error){
        return new Response.json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
}

// export async function PUT(req, res) {
//     // const {body} = await req.query;
//     console.log(req);
//     try {
//         // const category = new ProductCategoryModel({
//         //     name: body.name,
//         //     description: body.description,
//         //     image: body.image ?? null,
//         //     video: body.video ?? null,
//         //     parentId: body.parentId ?? null,
//         //     level: body.level ?? 0,
//         //     slug: body.slug ?? null,
//         //     path: body.path ?? null,
//         //     isFeatured: body.isFeatured,
//         //     isTopPick: body.isTopPick
//         // });
//         //
//         // await category.save();
//
//         return Response.json({
//             message: 'success',
//             // data: category ?? null,
//         });
//     } catch(error){
//         return new Response.json({
//             message: error.message,
//             data: null
//         });
//     }
// }


