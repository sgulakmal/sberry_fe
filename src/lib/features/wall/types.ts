import { PostType } from "@/lib/enum/post";

export interface WallState {
  wallItems: WallItem[];
}

export interface WallItem {
  postIds: string;
  postType: PostType;
}


