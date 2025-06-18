
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
    const dispatch = useDispatch();
   const announcement1: AnnouncementsState = useSelector((state: AppStore) => state.announcement);
   //const wall: WallState = useSelector((state: AppStore) => state.wall);

     const handleAcknowledge = (id: string) => {


//onSubmitPost(id)
 
     dispatch(acknowledgeAnnouncement(id));
  };


//       const onSubmitPost = async (id) => {
//        const acknowledge = {   announcementId: id,
//   rating: 5,
//   feedback: "Thanks for the "
//             }


// const po = await api.post('/announcement/acknowledge', acknowledge);

   

//     }










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
      const data: { count:number; items: Announcement[] } = await api.get('/announcement');
            
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
        <p>{announcement?.description}</p>
      </div>

      {/* Acknowledge button */}
      <div className="px-4 pb-4">
        <button  onClick={() => handleAcknowledge(announcement?.announcementId)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
           {/* <IconButton icon="acknow" ></IconButton> */}
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




