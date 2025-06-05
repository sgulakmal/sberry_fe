export interface Post {
  id: string;
  user: string;
  content: string;
  createdAt: string;
}

export interface FeedState {
  posts: Post[];
}