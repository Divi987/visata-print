import {NextResponse} from "next/server";

export function successResponseHandler(data = null, message = null)
{
    return NextResponse.json({
        status: 'success',
        data
    }, {status: 200});
}

export function errorResponseHandler(message)
{
    return NextResponse.json({
        status: 'error',
        message,
    }, {status: 500});
}
