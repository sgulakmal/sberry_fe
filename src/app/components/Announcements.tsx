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

  return (
    <div className="p-4 space-y-4">
      {announcements.map((ann) => (
        <div
          key={ann.id}
          className={`rounded-md p-4 shadow ${
            ann.acknowledged ? 'bg-gray-100' : 'bg-yellow-50'
          } border border-yellow-300`}
        >
          <p className="text-gray-800 text-md mb-2">{ann.message}</p>
          <div className="text-sm text-gray-600 mb-2">📢 Posted by: {ann.postedBy}</div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">Rating:</span>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < ann.rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>

          {!ann.acknowledged ? (
            <button
              onClick={() => handleAcknowledge(ann.id)}
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ✅ Acknowledge
            </button>
          ) : (
            <span className="text-green-600 text-sm">Acknowledged ✅</span>
          )}
        </div>
      ))}
    </div>
  );
}