
import { RootState } from '@/lip/store';
import { Reactions } from './types';

export const selectReactionsByPostId = ( state: RootState, postId: string)
: Reactions => {
  return (
    state.reactions.reactionsByPostId[postId] || {
      Like: 0,
      Love: 0,
      Haha: 0,
      Wow: 0,
      Sad: 0,
      Angry: 0,
      userReaction: null,
    }
  );
};
