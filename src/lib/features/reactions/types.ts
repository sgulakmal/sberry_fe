export enum ReactionType {
    'like' = 'like',
    'love' = 'love',
    'haha' = 'haha',
    'wow' = 'wow',
    'sad' = 'sad',
    'angry' = 'angry',
}

export interface ReactionSummary {
  like: number;
  love: number;
  haha: number;
  wow: number;
  sad: number;
  angry: number;
  total: number;
  viewerReaction?: ReactionType | null;
}

export interface ReactionsState {
  reactionsByPostId: Record<string, ReactionSummary>;
}
