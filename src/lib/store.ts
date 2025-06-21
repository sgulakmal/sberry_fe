import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/user/userSlice'
import reactionsReducer from './features/reactions/reactionsSlice'
import commentsReducer from './features/comments/commentsSlice'
// import feedReducer from './features/Feed/feedSlice'
import friendReducer from './features/friends/friendSlice'
import announcementReducer from './features/announcements/announcementsSlice'
import wallReducer from './features/wall/wallSlice'
import PostReducer from './features/post/postSlice'
import NavigationReducer from './features/navigation/navigationSlice';
import upcommingcelebrationReduce from './features/upcomming/upcommingSlice'
import statisticsReducer from './features/annonceStatistic/announcementsSlice'
import announcementListReducer from './features/announcementList/announcementsListSlice'
import pointsReducer from './features/wallet/walletSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      reactions: reactionsReducer,
      comments: commentsReducer,
      // feed: feedReducer,
      friends: friendReducer,
      announcement: announcementReducer,
      wall: wallReducer,
      post: PostReducer,
      navigation: NavigationReducer,
      celebrations: upcommingcelebrationReduce,
       announcementStatistic: statisticsReducer,
       announcementList: announcementListReducer,
       points: pointsReducer, 
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']