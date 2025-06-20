'use client';

import { AppStore } from '@/lib/type';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TextEditor } from '../utils/components/TextEditor';
import { CreatePostDto, Post } from '@/lib/features/post/types';
import api from '@/lib/services/axios';
import { useAddPostToStore } from '@/lib/helper/hook/post';
import { contentParser } from '../utils/contentParser';
import GifSelector from './GifSelector';
import DialogPopup from '../utils/components/DalogPopup';
import { IGif } from '@giphy/js-types';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const user = useSelector((state: AppStore) => state.auth.user);
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl);
  const [selectedImage, setImageGiftCard] = useState<string | null>(null);
  const [showGifiSelector, setShowGifiSelector] = useState<boolean>(false);


  const addPostToStore = useAddPostToStore();


  const onSubmitPost = async () => {

    const content = new contentParser(postText);

    if (user && postText) {
      const newPost: CreatePostDto = {
        companyId: user.companyId,
        companyBranchId: user.companyBranchId,
        author: {
          userId: user.id,
          email: user.email,
          username: user.username,
          designation: user.designation || 'User',
          profilePictureUrl: user.profilePictureUrl,
        },
        images: [selectedImage || ''],
        content: postText,
        followers: content.getUserList(),
        tags: content.getHashtags(),
        // amount: content.getAmounts(),

      }

      const post: Post = await api.post('/posts', newPost);
      addPostToStore([post], true);

    }
  }

  const giftCardImages = [
    'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg',
    'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg',
    'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
    'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',
    'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg'
  ];

  const changeGif = (gifi: IGif) => {
    setImageGiftCard(gifi.images.fixed_height.url);
    setShowGifiSelector(false);
  }





  return (
    <>
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


        {selectedImage && (
          <div className="mt-4">
            <div className="relative w-full h-40 rounded-md overflow-hidden border">
              <Image
                src={selectedImage}
                alt="Selected Gift Card"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <button
                onClick={() => setImageGiftCard(null)} // Remove seleted card
                className="absolute top-2 right-2 bg-black/60 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/80"
                title="Remove"
              >
                ×
              </button>
            </div>
          </div>
        )}


        {/* Textarea */}
        <TextEditor placeholder={`What's on your mind, ${user?.firstName}?`} onTextChange={setPostText} />

        {/* Gift Card Section */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Select a Gift Card</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {giftCardImages.map((imgSrc, index) => (
              <div
                key={index}
                className={`w-24 h-16 relative border-2 rounded-md cursor-pointer transition ${selectedImage === imgSrc ? 'border-blue-500' : 'border-transparent'
                  }`}
                onClick={() => setImageGiftCard(imgSrc)}
              >
                <Image
                  src={imgSrc}
                  alt={`Gift Card ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
            <div className={`w-24 h-16 relative border-2 rounded-md cursor-pointer transition 'border-blue-500' : 'border-transparent'  }`}
              onClick={() => setShowGifiSelector(true)}
            >
              <Image
                src="/images/giphy-logo.gif"
                alt='giphy-logo'
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />


            </div>
          </div>
        </div>

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
      <DialogPopup title='Search GIF' isOpen={showGifiSelector} onClose={() => setShowGifiSelector(false)}>
        <GifSelector onGifSelect={(gif) => changeGif(gif)} />
      </DialogPopup>
    </>
  );
}
