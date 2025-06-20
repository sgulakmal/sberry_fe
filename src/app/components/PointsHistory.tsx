'use client';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { AppStore, RootState } from '@/lib/store';


const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

export default function PointsHistory() {
  const points = useSelector((state:RootState) => state?.points?.points);
  const [typeFilter, setTypeFilter] = useState<'all' | 'credit' | 'debit'>('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filtered = points.filter((p) => {
    const date = new Date(p.date);
    const matchType = typeFilter === 'all' || p.cr_dr === typeFilter;
    const matchFrom = fromDate ? date >= new Date(fromDate) : true;
    const matchTo = toDate ? date <= new Date(toDate) : true;
    return matchType && matchFrom && matchTo;
  });

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Points Transaction History</h2>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          className="border rounded p-2 text-sm"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as any)}
        >
          <option value="all">All</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded p-2 text-sm"
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded p-2 text-sm"
        />
      </div>

      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Date</th>
            <th className="pb-2">Narration</th>
            <th className="pb-2">Type</th>
            <th className="pb-2 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No transactions found.
              </td>
            </tr>
          )}

          {filtered.map((p, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2">{formatDate(new Date(p.date))}</td>
              <td className="py-2">{p.naration}</td>
              <td className={`py-2 capitalize ${p.cr_dr === 'credit' ? 'text-green-600' : 'text-red-500'}`}>
                {p.cr_dr}
              </td>
              <td className="py-2 text-right">{p.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
