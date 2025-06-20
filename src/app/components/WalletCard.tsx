 
'use client';
import { useSelector, useDispatch } from 'react-redux';
;
import { redeemPoints } from '@/lib/features/wallet/walletSlice';
import { AppStore } from '@/lib/type';
import { AppDispatch } from '@/lib/store';


export default function WalletCard() {
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
   <div className="border bg-green-100 rounded-lg p-4 max-w-xs">
      <div className="flex items-center  mb-3">
        <div className="w-5 h-5 bg-green-100 text-green-600 flex items-center justify-center rounded">
          📩
        </div>
        <h2 className="font-semibold text-gray-800">My wallet</h2>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">💰</span>
          <span className="text-gray-700">Points</span>
        </div>
        <span className="text-gray-900 font-medium">{currentBalance}</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">👛</span>
          <span className="text-gray-700">Pot</span>
        </div>
        <span className="text-gray-900 font-medium">{potBalance}</span>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
        Redeem
      </button>
    </div>
  );
}
 
 
 
 