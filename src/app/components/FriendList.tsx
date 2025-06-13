import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Friend } from '@/lib/features/friends/types';
import { useEffect, useState } from 'react';


const month = new Date().getMonth() + 1; // 1-indexed

function isHighlightInThisMonth(dateStr?: string): boolean {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  return date.getMonth() + 1 === month;
}

export default function FriendList() {
  const friends = useSelector((state: RootState) => state.friends.friends);


    //const [friends, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const jsonData = await response.json();
     // setData(jsonData);
    }
    fetchData();
  }, []);

  const birthdayFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.birthday));
  const workAnniversaryFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.workAnniversary));
  const graduationFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.graduation));
  const farewellFriends = friends.filter((f) => isHighlightInThisMonth(f.highlights.farewell));

  const renderGroup = (title: string, list: Friend[]) => (
    list.length > 0 && (
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <ul className="space-y-2">
          {list.map((friend) => (
            <li key={friend.id} className="flex items-center gap-3">
              <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full" />
              <span className="text-gray-800">{friend.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow">
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Monthly Highlights</h2>
      {renderGroup('🎂 Birthdays', birthdayFriends)}
      {renderGroup('🏢 Work Anniversaries', workAnniversaryFriends)}
      {renderGroup('🎓 Graduations', graduationFriends)}
      {renderGroup('👋 Farewells', farewellFriends)}
    </div>
    </div>
  );
}