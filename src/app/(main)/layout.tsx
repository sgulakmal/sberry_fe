'use client'

import { useEffect } from "react";
// import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import MainMenu from "../components/MainMenu";
import TopNav from "../components/TopNav";
import { signIn, useSession } from 'next-auth/react';
import { login } from "@/lib/features/user/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import FriendList from "../components/FriendList";
import UpcommingCelebration from "../components/UpcommingCelebration";

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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (session && session.user) {
      // const selectedOrganizer = localStorage.getItem('SELECTED_ORGANIZATION')
      dispatch(login(session.user))
    }
  }, [session]);

  //     router.push('/'); // Redirect to home

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

      <TopNav />
      <div className="flex w-screen min-h-screen bg-gray-50 font-sans">

        {/* Left Sidebar */}
        <aside className="w-64 bg-white p-6 border-r">
          <MainMenu />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex justify-center p-6">
          <div className="w-full max-w-[700px]">
            {children}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-6 space-y-4 bg-white border-l">
          {/* Right sidebar content */}
          <UpcommingCelebration />
        </aside>

      </div>

    </>

  );
}
