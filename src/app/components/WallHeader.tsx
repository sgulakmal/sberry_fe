'use client'
 
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@/lib/type';
import Image from 'next/image';
import { IconButton } from '../utils';
import DialogPopup from '../utils/components/DalogPopup';
import CreatePost from './createPost';

 
const WallHeader = () => {
    const user = useSelector((state: AppStore) => state.auth.user);
    const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl);
    const [openPostCreate, setOpenPostCreate] = useState(false);



    return (
        <div className="max-w mx-auto rounded-lg shadow border overflow-hidden bg-[rgba(0,0,0,0.03)]">
            <div className="flex items-center ml-4 mr-4 p-4 space-x-4 h-40 bg-[rgba(0,0,0,0.03)">
                <Image
                    src={profilePictureUrl || '/images/default-user.png'}
                    alt={user?.email || ''}
                    width={50}
                    height={50}
                    className="rounded-full"
                    onError={() => setProfilePictureUrl("/images/default-user.png")} // fallback image
                />
                <textarea
                    rows={2}
                    className="w-full bg-[rgba(0,0,0,0.03)] rounded-3xl px-4 py-2 text-sm text-gray-700 resize-none outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    placeholder={`${user?.firstName}, Let's cheer someone up today!`}
                />
 
                <button onClick={() => setOpenPostCreate(true)} className="py-2 px-4  border border-transparent rounded-md shadow-sm text-white bg-[rgba(18,147,110,1)] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Post
                </button>
            </div>
            <div className="flex justify-center items-center border-t px-6 py-3 bg-[rgba(0,0,0,0.03)]">
                <div className="mr-7 flex flex-col items-center text-sm text-gray-700 hover:text-blue-600">
                    <IconButton icon="nominate" text="Nominate" />
                </div>
                <div className="mr-7 flex flex-col items-center text-sm text-gray-700 hover:text-blue-600">
                    <IconButton icon="award" text="Award" />
                </div>
                <div className="mr-7 flex flex-col items-center text-sm text-gray-700 hover:text-blue-600">
                    <IconButton icon="announce" text="Announce" />
                </div>
            </div>
 
            <DialogPopup isOpen={openPostCreate} onClose={() => setOpenPostCreate(false)} title="Create post">
               {<CreatePost />}
            </DialogPopup>
 
        </div>
    );
};
 
export default WallHeader;
