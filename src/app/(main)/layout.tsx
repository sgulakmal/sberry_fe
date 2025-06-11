'use client'

// import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import MainMenu from "../components/MainMenu";
import TopNav from "../components/TopNav";


// export const metadata: Metadata = {
//   title: "SBerry",
//   description: "A social media platform for friends",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>

      <StoreProvider>
        <TopNav />
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
