import React, { useState } from 'react';
import Reactions from './Reactions';
// import CommentComponent from './Comments';
import { useSelector } from 'react-redux';
import { AppStore } from '@/lib/type';
import { Post } from '@/lib/features/post/types';
import Image from 'next/image';
import { IconButton } from '../utils';
import { timeAgo } from '../utils/date';
import { PostType } from '@/lib/enum/post';
import { formatCount } from '../utils/number';

function Posts({ postId, postType }: { postId: string, postType: PostType }) {
  const post: Post = useSelector((state: AppStore) => state.post.postByPostId[postId]);
  const [imageLoading, setImageLoading] = useState(true);
  const [profilePictureUrl, setProfilePictureUrl] = useState(post?.author?.profilePictureUrl);

  function getRandomImageForPost(): string {
    const images: string[] = [
      '/images/sample_post0.png', '/images/sample_post1.jpg', '/images/sample_post2.jpg', '/images/sample_post3.jpeg',
      'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg',
      'https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg',
      'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg',
      'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg',
      'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
      'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
    ];
    const hash = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return images[hash % images.length];
  }

  const testPostBgClasses = [
    'from-blue-500 to-purple-600',
    'from-pink-500 to-red-500',
    'from-green-400 to-teal-500',
    'from-yellow-400 to-orange-500',
  ];

  if (!post || !post.content) return <>Post Not Found for id {postId}</>;

  return (
    <div className="w-full max-h-200 mx-auto bg-white rounded-md shadow p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start space-x-3">
        <Image
          src={profilePictureUrl}
          alt={post.author.username}
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
          onError={() => setProfilePictureUrl("/images/default-user.png")}
        />
        <div>
          <div className="flex items-center space-x-1 text-sm">
            <span className="font-semibold">{post.author.username}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{timeAgo(post.createdAt)}</span>
            <span className="text-gray-400">🌐</span>
          </div>
        </div>
      </div>

      {/* Content */}
      {postType === PostType.image && (
        <>
          <p className="text-sm text-gray-700">{post.content}</p>
          <div className="relative h-[450px] rounded-md overflow-hidden">
            <Image
              src={getRandomImageForPost()}
              alt={post.content}
              fill
              className="object-cover"
              onLoadingComplete={() => setImageLoading(false)}
            />
          </div>
        </>
      )}

      {postType === PostType.shortText && (
        <div className="relative flex-1 flex justify-center h-[450px] rounded-md overflow-hidden">
          <div className={`w-9/12 max-w-screen-sm bg-gradient-to-br ${testPostBgClasses} text-white text-2xl md:text-3xl font-semibold rounded-md p-6 shadow-md flex items-center justify-center text-center`}>
            <div className="w-96">{post.content}</div>
          </div>
        </div>
      )}

      {postType === PostType.longText && (
        <p className="h-[50px] max-h-[50px] line-clamp-3">{post.content}</p>
      )}

      {/* Reactions & Comments */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Reactions postId={postId} summeryView={true} />
        </div>
        <span>{formatCount(Math.floor(Math.random() * 10001))} Comments</span>
      </div>

      <div className="border-t pt-2 mt-4">
        <div className="flex justify-around text-gray-500 text-sm">
          <Reactions postId={postId} />
          <IconButton icon="comment" text="Comment" />
          <IconButton icon="share" text="Share" />
        </div>
      </div>
    </div>
  );
}

// Memoize component to avoid unnecessary re-renders
export default React.memo(Posts, (prevProps, nextProps) => {
  return prevProps.postId === nextProps.postId && prevProps.postType === nextProps.postType;
});
