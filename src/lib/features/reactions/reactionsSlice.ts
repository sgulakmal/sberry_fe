import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactionsState, ReactionSummary } from './types';
import { ReactionType } from '@/lib/enum/post';

const initialReactions: ReactionSummary = {
  like: 0,
  love: 0,
  haha: 0,
  wow: 0,
  sad: 0,
  angry: 0,
  total: 0,
};

const initialState: ReactionsState = {
  reactionsByPostId: {},
};

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    setInitialReaction: (
      state,
      action: PayloadAction<{ postId: string; reactions: ReactionSummary }>
    ) => {
      const { postId, reactions } = action.payload;
      state.reactionsByPostId[postId] = {
        ...initialReactions,
        ...reactions,
      };
    },
    addReaction: (
      state,
      action: PayloadAction<{ postId: string; reactionType: ReactionType }>
    ) => {
      const { postId, reactionType } = action.payload;
      const postReactions = state.reactionsByPostId[postId] || { ...initialReactions };
      const prevReaction = postReactions.viewerReaction;


      // Decrease previous reaction    
      if (prevReaction && postReactions[prevReaction] > 0) {
        postReactions[prevReaction] -= 1;
        postReactions.total -= 1;
      }
      if (prevReaction !== reactionType) {
        // Increase new reaction
        postReactions[reactionType] += 1;
        postReactions.total += 1;
        postReactions.viewerReaction = reactionType;
      } else {
        postReactions.viewerReaction = null;
      }



      state.reactionsByPostId[postId] = postReactions;
    },
  },
});

export const { addReaction, setInitialReaction } = reactionsSlice.actions;
export default reactionsSlice.reducer;
