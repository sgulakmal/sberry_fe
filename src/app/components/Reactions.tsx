import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReactionsByPostId } from '@/lib/features/reactions/reactionsSelectors';
import { addReaction } from '@/lib/features/reactions/reactionsSlice';
import { ReactionType } from '@/lib/features/reactions/types';
import { AppDispatch } from '@/lib/store';
import { AppStore } from '@/lib/type';
import { IconButton } from '../utils';
import { formatCount } from '../utils/number';

interface ReactionsProps {
  postId: string;
  summeryView?: boolean;
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

const Reactions: React.FC<ReactionsProps> = ({ postId, summeryView }) => {
  const dispatch = useDispatch<AppDispatch>();
  const reactions = useSelector((state: AppStore) => selectReactionsByPostId(state, postId));
  const [isHovered, setIsHovered] = useState(false);

  const handleReact = (reactionType: ReactionType) => {
    dispatch(addReaction({ postId, reactionType }));
    setIsHovered(false);
  };

  const viewerReaction = reactions.viewerReaction;

  if (summeryView) {
    if (!reactions.total) {
      return <></>
    }
    return <>
      {reactions.like > 0 && <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.like}</div>}
      {reactions.love > 0 && <div className="w-5 h-5 bg-red-300 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.love}</div>}
      {reactions.haha > 0 && <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.haha}</div>}
      {reactions.wow > 0 && <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.wow}</div>}
      {reactions.sad > 0 && <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.sad}</div>}
      {reactions.angry > 0 && <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white text-xs">{reactionEmojis.angry}</div>}

      <span>{formatCount(reactions.total)}</span>
    </>
  }

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
              className={`text-xl transition-transform hover:scale-125 ${viewerReaction === type ? 'ring-2 ring-blue-400 rounded-full' : ''
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
