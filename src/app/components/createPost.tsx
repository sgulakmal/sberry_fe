'use client';

import { AppStore } from '@/lib/type';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TextArea } from '../utils/components/TextArea';
import { Post } from '@/lib/features/post/types';
import api from '@/lib/services/axios';
import { useAddPostToStore } from '@/lib/helper/hook/post';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const user = useSelector((state: AppStore) => state.auth.user);
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl);

  const addPostToStore = useAddPostToStore();


  const onSubmitPost = async () => {
    if (user && postText) {
      const newPost = { // Need to finaliz with backend
        companyId: user.companyId,
        companyBranchId: user.companyBranchId,
        author: {
          userId: user.id,
          email: user.email,
          username: user.username,
          designation: user.designation || 'User',
          profilePictureUrl: user.profilePictureUrl,
        },
        content: postText
      }

      const post: Post = await api.post('/posts', newPost);
      addPostToStore([post], true);

    }
  }


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
      <TextArea placeholder={`What's on your mind, ${user?.firstName}?`} onTextChange={setPostText} />

      {/* Post Button */}
      <button
        disabled={!postText.trim()}
        onClick={onSubmitPost}
        className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${postText.trim() ? 'bg-primary hover:bg-hover' : 'bg-gray-300 cursor-not-allowed'
          }`}
      >
        Post
      </button>
    </div>
  );
}
