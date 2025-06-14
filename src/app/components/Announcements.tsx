// import { acknowledgeAnnouncement } from '@/lib/features/announcements/announcementsSlice';
// import { AppDispatch, RootState } from '@/lib/store';
// import { useSelector, useDispatch } from 'react-redux';




// export default function AnnouncementBanner() {
//   const announcements = useSelector((state: RootState) => state.announcement.announcements);
//   const dispatch = useDispatch<AppDispatch>();

//   const handleAcknowledge = (id: string) => {
//     dispatch(acknowledgeAnnouncement(id));
//   };

//   if (announcements.length === 0) return null;

//   return (<div className=" w-full">
//     <div className="bg-white rounded-lg shadow border">
//       <div className="p-4 flex items-center gap-4">
//         <img src="/img/prof-img.png" alt="Alex Bernard" className="rounded-full w-10 h-10" />
//         <div>
//           <div className="font-semibold">Alex Bernard</div>
//           <div className="text-sm text-gray-500">Contractor</div>
//         </div>
//         <div className="ml-auto flex items-center space-x-1">
//           <span className="text-orange-400">★</span>
//           <span className="text-orange-400">★</span>
//           <span className="text-gray-300">★</span>
//           <span className="text-gray-300">★</span>
//           <span className="text-gray-300">★</span>
//         </div>
//       </div>
//       <div className="px-4 pb-4 text-gray-800">
//         <p>
//           This starter template saved me weeks of setup time. The Supabase integration is flawless,
//           and the UI components are beautiful and easy to customize. Worth every penny!
//         </p>
//       </div>
//       <div className="px-4 pb-4">
//         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//           Acknowledge
//         </button>
//       </div>

//       --
//             <div className="p-4 flex items-center gap-4">
//         <img src="/img/prof-img.png" alt="Alex Bernard" className="rounded-full w-10 h-10" />
//         <div>
//           <div className="font-semibold">Alex Bernard</div>
//           <div className="text-sm text-gray-500">Contractor</div>
//         </div>
//         <div className="ml-auto flex items-center space-x-1">
//           <span className="text-orange-400">★</span>
//           <span className="text-orange-400">★</span>
//           <span className="text-gray-300">★</span>
//           <span className="text-gray-300">★</span>
//           <span className="text-gray-300">★</span>
//         </div>
//       </div>
//       <div className="px-4 pb-4 text-gray-800">
//         <p>
//           This starter template saved me weeks of setup time. The Supabase integration is flawless,
//           and the UI components are beautiful and easy to customize. Worth every penny!
//         </p>
//       </div>
//       <div className="px-4 pb-4">
//         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//           Acknowledge
//         </button>
//       </div>
//       --
//       <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
//         <div className="flex items-center space-x-1">
//           <button className="text-gray-500 hover:text-black">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <div className="flex items-center gap-1">
//             <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//           </div>
//           <button className="text-gray-500 hover:text-black">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//         <a href="#" className="text-sm text-emerald-700 hover:underline">Show all</a>
//       </div>
//     </div>
//   </div>
  

  
//     // <div className="p-4 space-y-4">
//     //   {announcements.map((ann) => (
//     //     <div
//     //       key={ann.id}
//     //       className={`rounded-md p-4 shadow ${
//     //         ann.acknowledged ? 'bg-gray-100' : 'bg-yellow-50'
//     //       } border border-yellow-300`}
//     //     >
//     //       <p className="text-gray-800 text-md mb-2">{ann.message}</p>
//     //       <div className="text-sm text-gray-600 mb-2">📢 Posted by: {ann.postedBy}</div>

//     //       <div className="flex items-center gap-2 mb-2">
//     //         <span className="text-sm">Rating:</span>
//     //         {Array.from({ length: 5 }, (_, i) => (
//     //           <span key={i} className={i < ann.rating ? 'text-yellow-500' : 'text-gray-300'}>
//     //             ★
//     //           </span>
//     //         ))}
//     //       </div>

//     //       {!ann.acknowledged ? (
//     //         <button
//     //           onClick={() => handleAcknowledge(ann.id)}
//     //           className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//     //         >
//     //           ✅ Acknowledge
//     //         </button>
//     //       ) : (
//     //         <span className="text-green-600 text-sm">Acknowledged ✅</span>
//     //       )}
//     //     </div>
//     //   ))}
//     // </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '../utils/components/IconButton';
import { acknowledgeAnnouncement, setAnnouncements } from '@/lib/features/announcements/announcementsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/lib/type';
import Image from 'next/image';
import { AppDispatch } from '@/lib/store';
import { Announcement, AnnouncementsState } from '@/lib/features/announcements/types';
import api from '@/lib/services/axios';

// export interface Author {
//   name: string;
//   role: string;
//   avatar: string;
// }

// export interface Announcement {
//   companyId: string;
//   companyBranchId: string;
//   announcementId: string;
//   title: string;
//   content: string;
//   createdAt: Date;
//   author: Author;
//   visibility: 'all' | 'branch' | 'team';
//   userId: string;
//   date: Date;
//   isPinned?: boolean;
// }


// const mockAnnouncements: Announcement[] = [
//   {
//     companyId: '1',
//     companyBranchId: 'b1',
//     announcementId: 'a1',
//     title: 'Feedback on Starter Template',
//     content: 'This starter template saved me weeks of setup time. The Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!',
//     createdAt: new Date(),
//     author: {
//       name: 'Nuwan Madusanka',
//       role: 'Software Engineer',
//       avatar: '/img/prof-img.png', // Replace with actual path
//     },
//     visibility: 'all',
//     userId: 'u1',
//     date: new Date(),
//     isPinned: true,
//   },  {
//     companyId: '1',
//     companyBranchId: 'b1',
//     announcementId: 'a1',
//     title: 'Feedback on Starter Template',
//     content: 'fgh Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!',
//     createdAt: new Date(),
//     author: {
//       name: 'Alex Bernard',
//       role: 'Contractor',
//       avatar: '/img/prof-img.png', // Replace with actual path
//     },
//     visibility: 'all',
//     userId: 'u1',
//     date: new Date(),
//     isPinned: true,
//   },  {
//     companyId: '1',
//     companyBranchId: 'b1',
//     announcementId: 'a1',
//     title: 'Feedback on Starter Template',
//     content: 'fgh Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!',
//     createdAt: new Date(),
//     author: {
//       name: 'Dilantha Perera',
//       role: 'Contractor',
//       avatar: '/img/prof-img.png', 
//     },
//     visibility: 'all',
//     userId: 'u1',
//     date: new Date(),
//     isPinned: true,
//   }
  
//   // Add more mock announcements here
// ];

export default function AnnouncementSlider() {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
   const announcement1: AnnouncementsState = useSelector((state: AppStore) => state.announcement);
   //const wall: WallState = useSelector((state: AppStore) => state.wall);
const dispatch = useDispatch<AppDispatch>();
     const handleAcknowledge = (id: string) => {
     dispatch(acknowledgeAnnouncement(id));
  };

  const next = () => setCurrent((prev) => (prev + 1) % announcement1.data.length);
  const prev = () => setCurrent((prev) => (prev - 1 + announcement1.data.length) % announcement1.data.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
        async function fetchData() {
    //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV}announcement`, {
    //    method: 'GET',
    //    headers: {
    //      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDJiMjNkYS04ZTVhLTQ1ZWMtYWVkOC02NDY1MGQ5Y2E2OTQiLCJlbWFpbCI6Ikx1c2hhbi5KYXlhbmF0aEBleGFtcGxlLmNvbSIsInVzZXJuYW1lIjoibHVzaGFucCIsImlzQWRtaW4iOmZhbHNlLCJjb21wYW55SWQiOiJjb21wYW55LTEyMyIsImlhdCI6MTc0OTgzNzMxMiwiZXhwIjoxNzQ5OTIzNzEyfQ.xBNjTTe5icEIzs_O7B89G-DlIx1ZEoVYoPZ0Fq5mt4M',
    //        'Content-Type': 'application/json',
    // 'Accept': 'application/json'
    //    },
    //  });



      const data: { items: Announcement[] } = await api.get('/announcement');
    

        
                 dispatch(setAnnouncements(data));

        
        
       
         // setData(data);
          setLoading(false);
        }
        fetchData();
      }, []);

      // if (loading) {
      //   return <p>Loading...</p>;
      // }


  const announcement = announcement1.data[current];
  console.log('test dd',announcement1);
   console.log('test dd',announcement?.announcementId);
  return ( 
    <div className="w-full mx-auto bg-white border rounded shadow">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
          <Image src="/img/prof-img.png"
            alt={announcement?.createdBy.profilePictureUrl} 
      
             className="w-10 h-10 rounded-full"
            width="40"
            height="40"
           />  
              <div>
          <div className="font-semibold">{announcement?.createdBy.username}</div>
          <div className="text-sm text-gray-500">{announcement?.createdBy.designation}</div>
        </div>
        <div className="ml-auto flex items-center">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i === 0 ? 'text-orange-400' : 'text-gray-300'}`}><IconButton icon="rating" ></IconButton></span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 text-gray-800">
        <p>{announcement?.content}</p>
      </div>

      {/* Acknowledge button */}
      <div className="px-4 pb-4">
        <button  onClick={() => handleAcknowledge(announcement?.announcementId)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
           <IconButton icon="acknow" ></IconButton>
          Acknowledge
        </button>
      </div>

      {/* Footer (Navigation + Show all) */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <button onClick={prev} className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            {announcement1.data.map((_, idx) => (
              <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
            ))}
          </div>
          <button onClick={next} className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <a href="#" className="text-sm text-emerald-700 hover:underline">
          Show all
        </a>
      </div>
    </div> 
  );
}




