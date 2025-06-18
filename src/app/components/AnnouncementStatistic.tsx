'use client';

import { setAnnouncementsStatistic } from '@/lib/features/annonceStatistic/announcementsSlice';
import { AnnouncementsStatisticState } from '@/lib/features/annonceStatistic/types';
import api from '@/lib/services/axios';
import { AppStore } from '@/lib/type';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

interface Props {
  announcementId: string;
}

export default function StatisticsCard({ announcementId }: Props) {
  const dispatch = useDispatch();
  //const { stats, loading, error } = useSelector((stat) => stat.);
     const  { data, loading, error } = useSelector((state: AppStore) => state.announcementStatistic);

//   useEffect(() => {
//     dispatch(fetchAnnouncementStatistics(announcementId));
//   }, [dispatch, announcementId]);
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



      const data = await api.get(`/announcement/${announcementId}/statistics`);
    

        
                 dispatch(setAnnouncementsStatistic(data));

        
        
       
         // setData(data);
         // setLoading(false);
        }
        fetchData();
      }, []);
//   if (loading) return <p>Loading stats...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;
//   if (!data) return null;

  const acknowledged = Math.round(data.totalAcknowledgements * (data.acknowledgementRate / 100));
  const pending = data.totalAcknowledgements - acknowledged;

  return (
    <div className="bg-white shadow-sm rounded-lg p-5 max-w-md border">
      <h2 className="text-lg font-semibold text-gray-900">Announcement Statistics</h2>
      <p className="text-sm text-gray-500 mt-1">Current acknowledgment status</p>
      <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
        <div className="text-gray-600">Total Announcements</div>
        <div className="font-bold text-gray-800">{data.totalAcknowledgements}</div>

        <div className="text-gray-600">Acknowledged</div>
        <div className="font-bold text-green-600">{acknowledged}</div>

        <div className="text-gray-600">Pending</div>
        <div className="font-bold text-orange-500">{pending}</div>

        <div className="text-gray-600">Acknowledgment Rate</div>
        <div className="font-bold text-blue-600">{data.acknowledgementRate.toFixed(1)}%</div>
      </div>
    </div>
  );
}