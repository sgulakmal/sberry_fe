import Image from 'next/image';
import { IconButton } from '../utils/components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { triggerScrollToTop } from '@/lib/features/navigation/navigationSlice';
import { useState } from 'react';
import { AppStore } from '@/lib/type';
import React from 'react';

const TopNav = () => {

  const user = useSelector((state: AppStore) => state.auth.user);
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl || '');

  const dispatch = useDispatch();

  const handleMenuClick = (path: string) => {
    if (path === 'home') {
      dispatch(triggerScrollToTop());
    }
  }

  return (
    <div className="flex items-center justify-between bg-[rgba(18,147,110,1)] p-2 px-4 text-white">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        {/* <Image
          src="/images/logo.svg" // logo image path
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        /> */}

        <select
          value={1}
          className="bg-[rgba(18,147,110,1)] text-white placeholder-white text-sm px-4 py-1 rounded-full focus:outline-none w-48"
          onChange={() => console.log("change company")}
        >
          <option value="1">Centara Group</option>
        </select>
      </div>

      {/* Middle IconButtons */}
      <div className="flex items-center space-x-6">
        <IconButton icon="home" onClick={() => handleMenuClick('home')} />
        <IconButton icon="goal" />
        <IconButton icon="house" />
        <IconButton icon="group" />
        <IconButton icon="game" />

      </div>

      {/* Right Section */}
      {user && <div className="flex items-center space-x-4">
        <IconButton icon="notification" />

        {/* Avatar */}
        { profilePictureUrl && <Image
          src={profilePictureUrl}
          alt={user?.email || ''}
          width={32}
          height={32}
          className="rounded-full"
          onError={() => setProfilePictureUrl("/images/default-user.png")} // fallback image
        /> }
      </div>
      }
    </div>
  );
}

// Memoize component to avoid unnecessary re-renders
export default React.memo(TopNav);

