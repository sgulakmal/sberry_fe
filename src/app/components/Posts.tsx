import React, { useState } from 'react';
import Reactions from './Reactions';
// import CommentComponent from './Comments';
import { useSelector } from 'react-redux';
import { AppStore } from '@/lib/type';
import { Post } from '@/lib/features/post/types';
import Image from 'next/image';
import { IconButton } from '../utils';
import { selectReactionsByPostId } from '@/lib/features/reactions/reactionsSelectors';

export default function Posts({ postId }) {
  const post: Post = useSelector((state: AppStore) => state.post.postByPostId[postId]);
  const reactions = useSelector((state: AppStore) => selectReactionsByPostId(state, postId));
  const [imageLoading, setImageLoading] = useState(true);

  // temp
  function getRandomImageForPost(): string {
    const images: string[] = ['/images/sample_post0.png', '/images/sample_post1.jpg', '/images/sample_post2.jpg', '/images/sample_post3.jpeg', 
      'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
      'https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg',
      'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg',
      'https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg',
      'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg',
      'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg',
      'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
      'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',]

    const hash = postId.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return images[(hash % images.length)];
  }

  return (
    (post && post.content ? <>


      <div className="w-full max-h-200 mx-auto bg-white rounded-md shadow p-4 space-y-4">
        {/* Header */}
        <div className="flex items-start space-x-3">
          <Image
            src="/images/user.png"
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            width="40"
            height="40"
          />
          <div>
            <div className="flex items-center space-x-1 text-sm">
              <span className="font-semibold">{post.author.name}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">5h</span>
              <span className="text-gray-400">🌐</span>
            </div>
          </div>
        </div>

        {/* Post Text */}
        <p className="text-sm text-gray-700">
          {post.content}
        </p>

        {/* Image */}
        <div className="w-full rounded-md overflow-hidden">
          <Image
            src={getRandomImageForPost()}
            // src={post.images ? post.images[0] : "/images/sample_post.png"}
            alt={post.content}
            // className="mx-auto block"
            width="800"
            height="350"
            className={`mx-auto block block transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoadingComplete={() => setImageLoading(false)}
          />
        </div>

        {/* Reactions & Comments */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">❤️</div>
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">👍</div>
              {post.reactions.total}
            </div>
            {/* Reactions Count */}
            <span>{reactions.total | 10}</span>
          </div>
          <span>{post.commentCount | 2} Comments</span>
        </div>

        <div className="border-t pt-2 mt-4">
          <div className="flex justify-around text-gray-500 text-sm">
            <Reactions postId={postId} />
            <IconButton icon="comment" text="Comment"></IconButton>
            <IconButton icon="share" text="Share"></IconButton>

          </div>
        </div>
      </div>







      {/* <Reactions postId={postId} />
      <CommentComponent postId={postId} /> */}
    </> : <>Post Not Found for id {postId} <br /></>)
  );
}
