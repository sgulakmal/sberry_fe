import { PostType } from "@/lib/enum/post";

export interface WallState {
  wallItems: WallItem[];  
  nextToken?: string;
}

export interface WallItem {
  postIds: string;
  postType: PostType;
}


