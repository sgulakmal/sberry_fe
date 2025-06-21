// import { useSelector } from 'react-redux';
// import { RootState } from '@/lib/store';
// import { Friend } from '@/lib/features/friends/types';
import { useEffect } from 'react';
import { IconButton } from '../utils';


// const month = new Date().getMonth() + 1; // 1-indexed

// function isHighlightInThisMonth(dateStr?: string): boolean {
//   if (!dateStr) return false;
//   const date = new Date(dateStr);
//   return date.getMonth() + 1 === month;
// }

export default function FriendList() {
  // const friends = useSelector((state: RootState) => state.friends.friends);


    //const [friends, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
     // setData(jsonData);
    }
    fetchData();
  }, []);

  // const birthdayFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.birthday));
  // const workAnniversaryFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.workAnniversary));
  // const graduationFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.graduation));
  // const farewellFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.farewell));

  // const renderGroup = (title: string, list: Friend[]) => (
  //   list.length > 0 && (
  //     <div className="mb-4">
  //       <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
  //       <ul className="space-y-2">
  //         {list.map((friend) => (
  //           <li key={friend.id} className="flex items-center gap-3">
  //             <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full" />
  //             <span className="text-gray-800">{friend.name}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // );

  return (
<div className="bg-white rounded-xl border p-4 shadow-sm flex flex-col gap-2">
    <div className="flex items-center mb-4">
 <IconButton icon="month" ></IconButton>
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
  );
}