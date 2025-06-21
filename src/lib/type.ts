
import { CommentsState } from "./features/comments/types";
import { ReactionsState } from "./features/reactions/types";
import { FriendState } from "./features/friends/types";
import { UserState } from "./features/user/type";
import { WallState } from "./features/wall/types";
import { PostState } from "./features/post/types";
import { NavigationState } from "./features/navigation/types";
// import { FeedState } from "./features/Feed/types";

import { AnnouncementsState } from "./features/announcements/types";
import { AnnouncementsStatisticState } from "./features/annonceStatistic/types";
import { UpcommingState } from "./features/upcomming/types";
import { AnnouncementListState } from "./features/announcementList/types";
import { PointsState } from "./features/wallet/types";


export interface AppStore {
    auth: UserState;
    reactions: ReactionsState;
    comments: CommentsState;
    // feed: FeedState
    friend: FriendState;
    wall: WallState;
    post: PostState;
    navigation: NavigationState;
    announcement: AnnouncementsState;
        announcementStatistic: AnnouncementsStatisticState;
       celebrations :UpcommingState;
            announcementList :AnnouncementListState;
            points : PointsState;


}