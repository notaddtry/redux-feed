import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'John Matters' },
  { id: '1', name: 'Kavin Hollberg' },
  { id: '2', name: 'Elisa Black' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer

// export {} from userSlice.actions
