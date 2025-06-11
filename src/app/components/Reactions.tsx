import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReactionsByPostId } from '@/lib/features/reactions/reactionsSelectors';
import { addReaction } from '@/lib/features/reactions/reactionsSlice';
import { ReactionType } from '@/lib/features/reactions/types';
import { AppDispatch } from '@/lib/store';
import { AppStore } from '@/lib/type';
import { IconButton } from '../utils';

interface ReactionsProps {
  postId: string;
}

const reactionTypes: ReactionType[] = [
  ReactionType.like,
  ReactionType.love,
  ReactionType.haha,
  ReactionType.wow,
  ReactionType.sad,
  ReactionType.angry,
];

const reactionEmojis: Record<ReactionType, string> = {
  like: '👍',
  love: '❤️',
  haha: '😂',
  wow: '😮',
  sad: '😢',
  angry: '😡',
};

const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const reactions = useSelector((state: AppStore) => selectReactionsByPostId(state, postId));
  const [isHovered, setIsHovered] = useState(false);

  const handleReact = (reactionType: ReactionType) => {
    dispatch(addReaction({ postId, reactionType }));
    setIsHovered(false);
  };

  const viewerReaction = reactions.viewerReaction;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      
    >
      {/* Main Like button (shows selected reaction or default) */}
            <IconButton icon="like" text="Like"></IconButton>

      {/* Reaction panel on hover */}
      {isHovered && (
        <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white border shadow-md rounded-full px-3 py-2 flex gap-3 z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {reactionTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleReact(type)}
              title={type}
              className={`text-xl transition-transform hover:scale-125 ${
                viewerReaction === type ? 'ring-2 ring-blue-400 rounded-full' : ''
              }`}
            >
              {reactionEmojis[type]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reactions;
