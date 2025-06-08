
import { AppStore } from '@/lib/type';
import { ReactionSummary } from './types';

export const selectReactionsByPostId = ( state: AppStore, postId: string)
: ReactionSummary => {
  return (
    state.reactions.reactionsByPostId[postId] || {
      like: 0,
      love: 0,
      haha: 0,
      wow: 0,
      sad: 0,
      angry: 0,
      userReaction: null,
    }
  );
};
