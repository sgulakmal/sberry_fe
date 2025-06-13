'use client'

import { useEffect, useState } from "react";
// import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import MainMenu from "../components/MainMenu";
import TopNav from "../components/TopNav";
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { AuthUser } from "@/lib/features/user/type";

// export const metadata: Metadata = {
//   title: "SBerry",
//   description: "A social media platform for friends",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { data: session, status } = useSession();
  const [user, setUser] = useState<AuthUser>()

  useEffect(() => {
    if (session && session.user) {
      setUser(session.user)
    }
  }, [session]);

  if (status === "loading") return <p>Loading session...</p>;

  if (!session) {
    // Redirect to login manually (fallback)
    if (typeof window !== 'undefined') {
      signIn(undefined, { callbackUrl: '/' });
    }
    return <p>Redirecting to login...</p>;
  }

  return (

    <>
      <StoreProvider>
        <TopNav user={user} />
        <div className="flex min-h-screen bg-gray-100 font-sans">

          {/* Sidebar */}
          <aside className="w-64 bg-white p-6 border-r">
            <MainMenu />
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6">
            {children}
          </main>

          {/* Right sidebar */}
          <aside className="w-64 p-6 space-y-4">

          </aside>

        </div>
      </StoreProvider>
    </>

  );
}
