import { PostType } from "@/lib/enum/post";
import { Post } from "@/lib/features/post/types";

export const getPostType = (post: Post): PostType => {
    if (post?.images && post.images.length > 0) 
        return PostType.image;
    if (post?.content.length < 150)
        return PostType.shortText;
    return PostType.longText;
}