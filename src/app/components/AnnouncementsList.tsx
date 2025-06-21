'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncementsList } from '@/lib/features/announcementList/announcementsListSlice';

import api from '@/lib/services/axios';
import { RootState } from '@/lib/store';

const AnnouncementList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.announcementList);


  // useEffect(() => {
  //   dispatch(fetchAnnouncements() as any);
  // }, [dispatch]);

  //     const fetchAnnouncements = async () => {



  //           const amnouncementist = await api.get(`/announcement`);

  //  dispatch(setAnnouncementsList(amnouncementist));




  //   };



  //   const fetchCelebrations = createAsyncThunk(
  //   'celebrations/fetchCelebrations',
  //   async () => {
  //     const response = await api.get(`/announcement`);
  //     return response.data;
  //   }
  // );

  useEffect(() => {
    async function fetchData() {

      const items = await api.get('/announcement');

      dispatch(setAnnouncementsList(items.data));

      // setData(data);
      // setLoading(false);
    }
    fetchData();
  }, [dispatch]);



  // if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-6 rounded-lg border bg-white">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <span>📢</span> Announcements
      </h2>
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="pb-2">Announcement</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.announcementId} className="border-b">
              <td className="py-4 pr-6">
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-gray-600 line-clamp-2">{a.description}</div>
                <div className="text-xs text-gray-500 mt-1">Posted: {new Date(a.createdAt).toISOString()}</div>
              </td>
              <td className="py-4 align-top text-right">
                {a.acknowledgedAt ? (
                  <p className="text-sm text-gray-600">Acknowledged on<br />{new Date(a.acknowledgedAt).toISOString()}</p>
                ) : (
                  <button className="border border-green-500 text-green-600 font-semibold px-4 py-1 rounded hover:bg-green-100">
                    Acknowledge
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AnnouncementList;