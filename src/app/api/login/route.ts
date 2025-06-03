// app/api/login/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');

  // Mock authentication
  if (email === 'user' && password === '123') {
    const response = NextResponse.redirect(new URL('/', request.url));

    // Set cookie (you can use JWT or a session token)
    response.cookies.set('auth-token', 'dummy_token_123', {
      httpOnly: false,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials1' }, { status: 401 });
}
