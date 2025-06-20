'use client';
import { useSelector, useDispatch } from 'react-redux';
;
import { redeemPoints } from '@/lib/features/wallet/walletSlice';
import { AppStore } from '@/lib/type';
import { AppDispatch } from '@/lib/store';


export default function Wallet() {
  const dispatch = useDispatch<AppDispatch>();
  const points = useSelector((state: AppStore) => state?.points?.points);

  const currentBalance = points
    .filter(p => p.cr_dr === 'credit')
    .reduce((sum, p) => sum + p.point, 0);

  const potBalance = points
    .filter(p => p.naration.toLowerCase().includes('pot'))
    .reduce((sum, p) => sum + p.point, 0);

  const handleRedeem = () => {
    dispatch(redeemPoints(10)); // You can change amount or make it dynamic
  };

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">💼 My wallet</h2>
        <button className="text-xl leading-none">&times;</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 rounded-lg p-4 text-center shadow">
          <p className="text-sm font-medium text-gray-600 mb-1">Current Points Balance</p>
          <p className="text-3xl font-bold text-green-700">{currentBalance}</p>
          <p className="text-sm text-gray-500">Points</p>
        </div>

        <div className="bg-green-100 rounded-lg p-4 text-center shadow">
          <p className="text-sm font-medium text-gray-600 mb-1">Pot Balance</p>
          <p className="text-3xl font-bold text-green-700">{potBalance}</p>
          <p className="text-sm text-gray-500">Points</p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1">Redeem Points</h3>
        <p className="text-sm text-gray-500 mb-4">Exchange your points for rewards or donate to charity.</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRedeem}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Redeem Points
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
          >
            Donate to Charity
          </button>
        </div>
      </div>
    </div>
  );
}
