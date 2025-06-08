'use client'

// import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";
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

      <TopNav />
      <div className="flex min-h-screen bg-gray-100 font-sans">

        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 border-r">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-red-500 rounded-full mr-3"></div>
            <h2 className="text-lg font-semibold">Udayanga Lakmal</h2>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-green-600">Friends</a>
            <a href="#" className="block text-gray-700 hover:text-green-600">Celebrations</a>
            <a href="#" className="block text-gray-700 hover:text-green-600">Events</a>
            <a href="#" className="block text-gray-700 hover:text-green-600">My Wallet</a>
            <a href="#" className="block text-gray-700 hover:text-green-600">Surveys</a>
            <a href="#" className="block text-gray-700 hover:text-green-600">See More</a>
          </nav>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Your Shortcuts</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-gray-200 text-gray-800 rounded px-2 py-1">RF</span>
                <span>RCB Fanclub</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-green-200 text-gray-800 rounded px-2 py-1">TC</span>
                <span>New born babies</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">   
          <StoreProvider>{children}</StoreProvider>
        </main>

        {/* Right sidebar */}
        <aside className="w-64 p-6 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">My Wallet</h2>
            <p className="text-lg font-bold">200</p>
            <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded">
              Redeem Points
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Upcoming Celebrations</h2>
            <p>Anushka Sharma</p>
            <p className="text-sm text-gray-500">
              5 years anniversary in 3 days
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">This Month Highlights</h2>
            <ul className="text-sm space-y-1">
              <li>
                Anushka Sharma - Anniversary,{' '}
                <span className="text-green-600">June 10</span>
              </li>
              <li>
                Alex Bernard - Birthday,{' '}
                <span className="text-green-600">June 10</span>
              </li>
              <li>
                Stephanie Jenson - Graduation,{' '}
                <span className="text-green-600">June 15</span>
              </li>
              <li>
                Jerad Osman - Farewell,{' '}
                <span className="text-green-600">June 20</span>
              </li>
              <li>
                Stephanie Jenson - Birthday,{' '}
                <span className="text-green-600">June 15</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>

  );
}
