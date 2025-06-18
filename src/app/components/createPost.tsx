'use client';
 
import { AppStore } from '@/lib/type';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TextArea } from '../utils/components/TextArea';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const user = useSelector((state: AppStore) => state.auth.user);
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl);
   return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg relative">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={profilePictureUrl || '/images/default-user.png'}
          alt={user?.email || ''}
          width={50}
          height={50}
          className="rounded-full"
          onError={() => setProfilePictureUrl('/images/default-user.png')}
        />
        <div>
          <p className="font-semibold">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
 
      {/* Textarea */}
      <TextArea placeholder={`What's on your mind, ${user?.firstName}?`} value={postText} onTextChange={setPostText} />
 
      {/* Post Button */}
      <button
        disabled={!postText.trim()}
        className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${postText.trim() ? 'bg-primary hover:bg-hover' : 'bg-gray-300 cursor-not-allowed'
          }`}
      >
        Post
      </button>
    </div>
  );
}
