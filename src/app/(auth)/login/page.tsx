'use client';

import { getCsrfToken } from "next-auth/react";
import { useEffect, useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 


export default function LoginPage() {
  const router = useRouter();
  const [csrfToken, setCsrfToken] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    getCsrfToken().then(token => {
      setCsrfToken(token ?? undefined);
    });
  }, []);

  if (!csrfToken) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Unable to load login form. Please refresh.</div>;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push('/'); // ✅ Redirect to home
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <div className="w-screen">
      {/* <Head>
        <title>Str🍓berry - Login</title>
      </Head> */}
      <div className="flex min-h-screen bg-green-100 items-center justify-center relative">
        {/* Left Branding */}
        <div className="absolute left-10 top-10">
          <h1 className="text-4xl font-bold text-green-900 flex items-center">
            Str
            <span className="text-5xl mx-1">🍓</span>
            berry
          </h1>
          <p className="mt-3 text-gray-700">
            Connect with colleagues and the <br />
            world around you..
          </p>
        </div>

        {/* Login Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm z-10">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Sign in to your account
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email or phone number
              </label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <a href="#" className="text-sm text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="mt-3 w-full flex justify-center py-2 px-4 border border-green-300 bg-green-100 text-green-800 rounded-md hover:bg-green-200"
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
        {/* Footer */}
        <footer className="absolute bottom-4 text-sm text-gray-500">
          © 2025
        </footer>
      </div>
    </div>
  );
}


// app/login/page.tsx
// 'use client';

// import { getCsrfToken } from "next-auth/react";
// import { useEffect, useState } from "react";
// import Head from "next/head";

// export default function LoginPage() {
//   const [csrfToken, setCsrfToken] = useState<string | undefined>();

//   useEffect(() => {
//     getCsrfToken().then(token => {
//       setCsrfToken(token ?? undefined);
//     });
//   }, []);

//   if (!csrfToken) return null; // or show loading spinner

//   return (
//     <form method="post" action="/api/auth/callback/credentials" className="space-y-4">
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

//       <div>
//         <label>Email</label>
//         <input name="email" type="email" required className="border px-2 py-1" />
//       </div>

//       <div>
//         <label>Password</label>
//         <input name="password" type="password" required className="border px-2 py-1" />
//       </div>

//       <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
//     </form>
//   );
// }


