export interface Reply {
  id: number;
  text: string;
}
export interface Comment {
  id: number;
  postId: string;
  text: string;
  likes: number;
  replies: Reply[];
  replyInput?: string;
}



export interface CommentsState {
  commentsByPostId: Record<string, Comment[]>;
}
