import { NextResponse } from 'next/server';

const APIResponseHandler = {
    HTTP_200_OK: (data = {}, message = "Request successful") => {
        return NextResponse.json({
            status: 200,
            code: "HTTP_200_OK",
            message,
            data
        }, { status: 200 });
    },

    HTTP_201_CREATED: (data = {}, message = "Resource created successfully") => {
        return NextResponse.json({
            status: 201,
            code: "HTTP_201_CREATED",
            message,
            data
        }, { status: 201 });
    },

    HTTP_400_BAD_REQUEST: (message = "Bad request", data = {}) => {
        return NextResponse.json({
            status: 400,
            code: "HTTP_400_BAD_REQUEST",
            message,
            data
        }, { status: 400 });
    },

    HTTP_401_UNAUTHORIZED: (message = "Unauthorized access", data = {}) => {
        return NextResponse.json({
            status: 401,
            code: "HTTP_401_UNAUTHORIZED",
            message,
            data
        }, { status: 401 });
    },

    HTTP_403_FORBIDDEN: (message = "Permission denied", data = {}) => {
        return NextResponse.json({
            status: 403,
            code: "HTTP_403_FORBIDDEN",
            message,
            data
        }, { status: 403 });
    },

    HTTP_404_NOT_FOUND: (message = "Resource not found", data = {}) => {
        return NextResponse.json({
            status: 404,
            code: "HTTP_404_NOT_FOUND",
            message,
            data
        }, { status: 404 });
    },

    HTTP_409_CONFLICT: (message = "Resource conflict", data = {}) => {
        return NextResponse.json({
            status: 409,
            code: "HTTP_409_CONFLICT",
            message,
            data
        }, { status: 409 });
    },

    HTTP_500_INTERNAL_SERVER_ERROR: (message = "Internal server error", data = {}) => {
        return NextResponse.json({
            status: 500,
            code: "HTTP_500_INTERNAL_SERVER_ERROR",
            message,
            data
        }, { status: 500 });
    },

    HTTP_503_SERVICE_UNAVAILABLE: (message = "Service unavailable", data = {}) => {
        return NextResponse.json({
            status: 503,
            code: "HTTP_503_SERVICE_UNAVAILABLE",
            message,
            data
        }, { status: 503 });
    },

    HTTP_204_NO_CONTENT: (message = "No content", data = {}) => {
        return NextResponse.json({
            status: 204,
            code: "HTTP_204_NO_CONTENT",
            message,
            data
        }, { status: 204 });
    },

    HTTP_405_METHOD_NOT_ALLOWED: (message = "Method not allowed", data = {}) => {
        return NextResponse.json({
            status: 405,
            code: "HTTP_405_METHOD_NOT_ALLOWED",
            message,
            data
        }, { status: 405 });
    },

    HTTP_406_NOT_ACCEPTABLE: (message = "Not acceptable", data = {}) => {
        return NextResponse.json({
            status: 406,
            code: "HTTP_406_NOT_ACCEPTABLE",
            message,
            data
        }, { status: 406 });
    },

    HTTP_415_UNSUPPORTED_MEDIA_TYPE: (message = "Unsupported media type", data = {}) => {
        return NextResponse.json({
            status: 415,
            code: "HTTP_415_UNSUPPORTED_MEDIA_TYPE",
            message,
            data
        }, { status: 415 });
    },

    HTTP_429_TOO_MANY_REQUESTS: (message = "Too many requests", data = {}) => {
        return NextResponse.json({
            status: 429,
            code: "HTTP_429_TOO_MANY_REQUESTS",
            message,
            data
        }, { status: 429 });
    },

    HTTP_422_UNPROCESSABLE_ENTITY: (message: string, data: any) => {
        return NextResponse.json({
            status: 422,
            code: "HTTP_422_UNPROCESSABLE_ENTITY",
            message,
            data
        }, { status: 422 });
    }
};

export default APIResponseHandler;
