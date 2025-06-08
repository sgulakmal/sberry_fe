import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactionsState, ReactionType, ReactionSummary } from './types';

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

        // Decrease previous reaction
        const prevReaction = postReactions.viewerReaction;
        if (prevReaction && postReactions[prevReaction] > 0) {
          postReactions[prevReaction] -= 1;
        }

        // Increase new reaction
        postReactions[reactionType] += 1;
        postReactions.viewerReaction = reactionType;

        state.reactionsByPostId[postId] = postReactions;
      },
  },
});

export const { addReaction, setInitialReaction } = reactionsSlice.actions;
export default reactionsSlice.reducer;
