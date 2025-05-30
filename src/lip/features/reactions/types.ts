export type ReactionType = 'Like' | 'Love' | 'Haha' | 'Wow' | 'Sad' | 'Angry';

export interface Reactions {
  Like: number;
  Love: number;
  Haha: number;
  Wow: number;
  Sad: number;
  Angry: number;
  userReaction?: ReactionType | null;
}

export interface ReactionsState {
  reactionsByPostId: Record<string, Reactions>;
}
