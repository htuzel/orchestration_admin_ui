import {NextResponse} from 'next/server'
import {DASHBOARD, LOGIN, authRoutes, protectedRoutes} from '@/commons/router';
import {API_TOKEN_NAME} from "@/commons/constants";

export function middleware(request) {
    const currentUser = request.cookies.get(API_TOKEN_NAME)

    if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
        return NextResponse.redirect(new URL(LOGIN, request.url))
    }

    if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
        return NextResponse.redirect(new URL(DASHBOARD, request.url));
    }
}
