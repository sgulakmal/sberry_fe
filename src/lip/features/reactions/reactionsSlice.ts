import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactionsState, ReactionType, Reactions } from './types';

const initialReactions: Reactions = {
  Like: 0,
  Love: 0,
  Haha: 0,
  Wow: 0,
  Sad: 0,
  Angry: 0,
  userReaction: null,
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
      action: PayloadAction<{ postId: string; reactions: Reactions }>
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
        const prevReaction = postReactions.userReaction;
        if (prevReaction && postReactions[prevReaction] > 0) {
          postReactions[prevReaction] -= 1;
        }

        // Increase new reaction
        postReactions[reactionType] += 1;
        postReactions.userReaction = reactionType;

        state.reactionsByPostId[postId] = postReactions;
      },
  },
});

export const { addReaction, setInitialReaction } = reactionsSlice.actions;
export default reactionsSlice.reducer;
