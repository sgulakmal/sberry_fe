'use client'

// import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import FriendList from "../components/FriendList";
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

     {/* April Birthdays Card */}
                  <div className="bg-white rounded-xl border p-4 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-semibold text-lg"> 🎂 April Birthdays</h2>
                      <span className="text-gray-400 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 01.418-.23c.06-.01.122-.02.191-.02.069 0 .131.01.191.02a.75.75 0 01.418.23l.041.02m-.75 0v.008c0 .414.336.75.75.75s.75-.336.75-.75v-.008m-1.5 0a.75.75 0 01.75-.75.75.75 0 01.75.75m-1.5 0v.008c0 .414.336.75.75.75s.75-.336.75-.75v-.008m-1.5 0a.75.75 0 01.75-.75.75.75 0 01.75.75" />
                        </svg>
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">Today</div>
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/img/sberry-logo.png" alt="Alex" className="w-8 h-8 rounded-full" />
                      <span>Alex</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/img/prof-img.png" alt="John" className="w-8 h-8 rounded-full" />
                      <span>John</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 mb-1">28 April</div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/img/prof-img.png" alt="Smith" className="w-8 h-8 rounded-full" />
                      <span>Smith</span>
                    </div>
                    <button className="w-full mt-2 py-2 rounded-lg bg-gray-100 text-gray-500 font-medium" >Explore all this month</button>
                  </div>

          <div className="bg-white rounded-xl border p-4 shadow-sm flex flex-col gap-2">
    <div className="flex items-center mb-4">
      <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4-4h.01M21 12.2A9 9 0 112.6 9.6" />
      </svg>
      <h2 className="font-semibold text-gray-700">This Month Highlights</h2>
    </div>

    <ul className="space-y-4">

      <li className="flex items-start space-x-3">

        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Anushka Sharma"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Anushka Sharma</p>
          <p className="text-sm text-gray-500">5 years anniversary, <span className="text-emerald-600">June, 10</span></p>
        </div>
       
      </li>

      <li className="flex items-start space-x-3">
        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Alex Bernard"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Alex Bernard</p>
          <p className="text-sm text-gray-500">🎂 Birthday, <span className="text-emerald-600">June, 10</span></p>
        </div>
      
      </li>

      <li className="flex items-start space-x-3">
        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Stephanie Jenson"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Stephanie Jenson</p>
          <p className="text-sm text-gray-500">Graduation, <span className="text-emerald-600">June, 15</span></p>
        </div>
   
      </li>

      <li className="flex items-start space-x-3">
        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Jerad Osman"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Jerad Osman</p>
          <p className="text-sm text-gray-500">Farewell, <span className="text-emerald-600">June, 20</span></p>
        </div>
       
      </li>

      <li className="flex items-start space-x-3">
        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Alex Bernard"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Alex Bernard</p>
          <p className="text-sm text-gray-500">🎂 Birthday, <span className="text-emerald-600">June, 10</span></p>
        </div>
   
      </li>

      <li className="flex items-start space-x-3">
        <img src="/img/prof-img.png" className="w-10 h-10 rounded-full" alt="Stephanie Jenson"/>
        <div>
          <p className="text-sm font-medium text-gray-800">Stephanie Jenson</p>
          <p className="text-sm text-gray-500">Graduation, <span className="text-emerald-600">June, 15</span></p>
        </div>

      </li>
    </ul>
  </div>
    
        
        </aside>
      </div>
    </>

  );
}
