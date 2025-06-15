import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { Friend } from '@/lib/features/friends/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconButton } from '../utils';
import api from '@/lib/services/axios';
import { setUpcommingCelebration } from '@/lib/features/upcomming/upcommingSlice';
import { UpcommingState } from '@/lib/features/upcomming/types';
import dayjs from 'dayjs';
import { formatCelebrationDate, timeAgo } from '../utils/date';


const month = new Date().getMonth() + 1; // 1-indexed
interface UpcommingCelebration {
  userId: string;
  name: string;
  avatarUrl: string | null;
  celebrationName: string;
  celebrationDate: Date;
}
// function isHighlightInThisMonth(dateStr?: string): boolean {
//   if (!dateStr) return false;
//   const date = new Date(dateStr);
//   return date.getMonth() + 1 === month;
// }

export default function UpcommingCelebration() {
 // const friends = useSelector((state: RootState) => state.friends.friends);
  const dispatch = useDispatch<AppDispatch>();

  
  const { data: celebrations, loading, error } = useSelector((state : RootState) => state.celebrations);


    //const [friends, setData] = useState(null);


 useEffect(() => {
        async function fetchData() {

     const data: UpcommingState  = await api.get('/celebrations/month');

                 dispatch(setUpcommingCelebration(data));

         // setData(data);
         // setLoading(false);
        }
        fetchData();
      }, []);

const groupCelebrations = (celebrations : UpcommingCelebration[]) => {
  const today = dayjs().startOf('day');
  const upcoming: UpcommingCelebration[] = [];
  const todayList: UpcommingCelebration[] = [];
  const recent: UpcommingCelebration[] = [];

  celebrations.forEach((c) => {
    const date = dayjs(c.celebrationDate).startOf('day');
    const diff = date.diff(today, 'day');

    if (diff === 0) {
      todayList.push(c);
    } else if (diff > 0) {
      upcoming.push(c);
    } else {
      recent.push(c);
    }
  });

  return { today: todayList, upcoming, recent };
};

const { today, upcoming, recent } = groupCelebrations(celebrations);

   const renderContent = (title,celedate,celebrationName) => {
       switch (title) {
         case 'Today':
           return <span className="text-green-600 font-medium">Today is {celebrationName}.</span>;
         case 'Upcoming':
           return    <p className="text-sm text-gray-500">
            {celebrationName} <span className="text-green-600 font-medium">in {formatCelebrationDate(celedate)}.</span>
          </p>;
         case 'Recent':
      return  <p className="text-sm text-gray-500">
            {celebrationName} <span className="text-green-600 font-medium">{timeAgo(celedate)}</span> </p>;
         default:
           return null;
       }
     };

const renderGroup = (title: string, list: UpcommingCelebration[]) => (
  list.length > 0 && (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
       <ul className="space-y-4">
      {list.map((user) => (
                      <li className="flex items-start space-x-3">
      <div className="flex items-center space-x-3">
        <Image
          src={user.avatarUrl ?? '/img/prof-img.png'} // Replace with your image path
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-sm text-gray-900">{user.name}</p>
          {renderContent(title, user.celebrationDate, user.celebrationName)}
       
        </div>
      </div>
      </li>
        // <div key={user.userId} className="flex items-center space-x-3 mb-2">
        //   <Image
        //     src={user.avatarUrl ?? '/default-avatar.png'}
        //     alt={user.name}
        //     width={40}
        //     height={40}
        //     className="rounded-full object-cover"
        //   />
        //   <div>
        //     <p className="text-sm font-medium text-gray-900">{user.name}</p>
        //     <p className="text-sm text-gray-500">{user.celebrationName}</p>
        //   </div>
        // </div>
      ))}
      </ul>
    </div>
  )
);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (  <div className="border border-green-300 rounded-lg p-4 max-w-xs">
      <div className="flex items-center mb-3">
        {/* Celebration icon */}

         <IconButton icon="month" ></IconButton>
        <h2 className="text-sm font-medium text-gray-800">Events</h2>
      </div>

      {renderGroup('Today', today)}
{renderGroup('Upcoming', upcoming)}
{renderGroup('Recent', recent)}
         {/* <ul className="space-y-4">
              <p className="text-sm font-medium text-gray-800">Today</p>
  {celebrations.map((user) => (

              <li className="flex items-start space-x-3">
      <div className="flex items-center space-x-3">
        <Image
          src={user.avatarUrl ?? '/img/prof-img.png'} // Replace with your image path
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-sm text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">
            {user.celebrationName} in <span className="text-green-600 font-medium">3 days</span>
          </p>
        </div>
      </div>
      </li>
 
          ))}


               </ul> */}
    </div>

  );
}