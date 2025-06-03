


import Head from 'next/head';
import { redirect } from 'next/navigation';


export default function LoginPage() {


  return (
    <div className="w-screen">
      <Head>
        <title>Str🍓berry - Login</title>
      </Head>
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
            <form className="space-y-4" action="/api/login" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email or phone number
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
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
                  type="button"
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
