import { NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/dashboard', '/profile']
const publicRoutes = ['/', '/login', '/signup', '/about', '/faqs']
 
export async function middleware(req) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    
    const cookie = (await cookies()).get('session')?.value

    let session = null;
    if (cookie) {
        try {
            session = await decrypt(cookie);
        } catch (error) {
            console.error('Failed to decrypt session:', error);
        }
    }
    
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    
    return NextResponse.next()
}
 
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}