import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../components/posts/postSlice'
import userReducer from '../components/users/userSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
})
