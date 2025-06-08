import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/user/userSlice'
import reactionsReducer from './features/reactions/reactionsSlice'
import commentsReducer from './features/comments/commentsSlice'
import feedReducer from './features/feed/feedSlice'
import friendReducer from './features/friends/friendSlice'
import announcementReducer from './features/announcements/announcementsSlice'
import wallReducer from './features/wall/wallSlice'
import PostReducer from './features/post/postSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      reactions: reactionsReducer,
      comments: commentsReducer,
      feed: feedReducer,
      friends: friendReducer,
      announcement: announcementReducer,
      wall: wallReducer,
      post: PostReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']