import { createSlice } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    date: sub(Date.now(), { minutes: 10 }).toISOString(),
    title: 'First Post!',
    content: 'Hello!',
    userId: '1',
  },
  {
    id: '2',
    date: sub(Date.now(), { minutes: 5 }).toISOString(),
    title: 'Second Post',
    content: 'More text',
    userId: '2',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    },
    editPost(state, action) {
      const { id, title, content, user } = action.payload
      const oldPost = state.find((post) => post.id === id)
      if (oldPost) {
        oldPost.title = title
        oldPost.content = content
      }
    },
  },
})

export const { addPost, editPost } = postsSlice.actions

export default postsSlice.reducer
