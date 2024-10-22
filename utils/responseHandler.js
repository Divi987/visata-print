import {NextResponse} from "next/server";

export function successResponseHandler(data = null)
{
    return NextResponse.json({
        status: 'success',
        data
    });
}

export function errorResponseHandler(message)
{
    return NextResponse.json({
        status: 'error',
        message,
        data: null
    });
}
