import { acknowledgeAnnouncement } from '@/lib/features/announcements/announcementsSlice';
import { AppDispatch, RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';




export default function AnnouncementBanner() {
  const announcements = useSelector((state: RootState) => state.announcement.announcements);
  const dispatch = useDispatch<AppDispatch>();

  const handleAcknowledge = (id: string) => {
    dispatch(acknowledgeAnnouncement(id));
  };

  if (announcements.length === 0) return null;

  return (<div className=" w-full">
    <div className="bg-white rounded-lg shadow border">
      <div className="p-4 flex items-center gap-4">
        <img src="/img/prof-img.png" alt="Alex Bernard" className="rounded-full w-10 h-10" />
        <div>
          <div className="font-semibold">Alex Bernard</div>
          <div className="text-sm text-gray-500">Contractor</div>
        </div>
        <div className="ml-auto flex items-center space-x-1">
          <span className="text-orange-400">★</span>
          <span className="text-orange-400">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
        </div>
      </div>
      <div className="px-4 pb-4 text-gray-800">
        <p>
          This starter template saved me weeks of setup time. The Supabase integration is flawless,
          and the UI components are beautiful and easy to customize. Worth every penny!
        </p>
      </div>
      <div className="px-4 pb-4">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Acknowledge
        </button>
      </div>
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <button className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <button className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <a href="#" className="text-sm text-emerald-700 hover:underline">Show all</a>
      </div>
    </div>
  </div>
    // <div className="p-4 space-y-4">
    //   {announcements.map((ann) => (
    //     <div
    //       key={ann.id}
    //       className={`rounded-md p-4 shadow ${
    //         ann.acknowledged ? 'bg-gray-100' : 'bg-yellow-50'
    //       } border border-yellow-300`}
    //     >
    //       <p className="text-gray-800 text-md mb-2">{ann.message}</p>
    //       <div className="text-sm text-gray-600 mb-2">📢 Posted by: {ann.postedBy}</div>

    //       <div className="flex items-center gap-2 mb-2">
    //         <span className="text-sm">Rating:</span>
    //         {Array.from({ length: 5 }, (_, i) => (
    //           <span key={i} className={i < ann.rating ? 'text-yellow-500' : 'text-gray-300'}>
    //             ★
    //           </span>
    //         ))}
    //       </div>

    //       {!ann.acknowledged ? (
    //         <button
    //           onClick={() => handleAcknowledge(ann.id)}
    //           className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    //         >
    //           ✅ Acknowledge
    //         </button>
    //       ) : (
    //         <span className="text-green-600 text-sm">Acknowledged ✅</span>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
}