import { ReactionType } from "@/lib/enum/post";

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
