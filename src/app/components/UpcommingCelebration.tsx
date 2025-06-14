import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { Friend } from '@/lib/features/friends/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconButton } from '../utils';
import api from '@/lib/services/axios';
import { setUpcommingCelebration } from '@/lib/features/upcomming/upcommingSlice';
import { UpcommingState } from '@/lib/features/upcomming/types';


const month = new Date().getMonth() + 1; // 1-indexed

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (  <div className="border border-green-300 rounded-lg p-4 max-w-xs">
      <div className="flex items-center mb-3">
        {/* Celebration icon */}

         <IconButton icon="birthday" ></IconButton>
        <h2 className="text-sm font-medium text-gray-800">Upcoming Celebrations</h2>
      </div>
         <ul className="space-y-4">
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
               </ul>
    </div>

  );
}