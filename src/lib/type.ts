import { FeedState } from "./features/Feed/types";
import { CommentsState } from "./features/comments/types";
import { ReactionsState } from "./features/reactions/types";
import { FriendState } from "./features/friends/types";
import { UserState } from "./features/user/type";


export interface Store {
    auth: UserState;
    reactions: ReactionsState;
    comments: CommentsState;
    feed: FeedState
    friend: FriendState;
}