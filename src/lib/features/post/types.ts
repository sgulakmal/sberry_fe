import { Visibility } from "@/lib/enum/post";
import { ReactionSummary, ReactionType } from "../reactions/types";

export interface UserSummary {
  userId: string;
  username: string;
  profilePictureUrl: string;
  designation: string;
  email: string,
}

interface CommentSummary {
  id: string;
  content: string;
  author: UserSummary;
  createdAt: string;
}

export interface Comment {
  userId: string;
  name: string;
  comment: string;
  timestamp: string;
}

export interface Post {
  postId: string;
  isAnnouncement?: boolean;
  companyId: string;
  companyBranchId: string;
  followers?: string[];
  visibility?: Visibility;
  isPinned?: boolean;
  author: UserSummary;
  content: string;
  mediaUrls?: string[]; // optional for images/videos
  images?: string[]
  createdAt?: string;
  updatedAt?: string;

  // Extra display info
  lastComment?: CommentSummary; // last/latest comment
  commentCount?: number;

  reactions: ReactionSummary;

  // Optionally
  isEdited?: boolean;
}

export interface PostState {
  postByPostId: Record<string, Post>;
}