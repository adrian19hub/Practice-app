import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../api'
import type { RootState } from '../store'

// Define a type for the slice state
interface UsersState {
  data: User[]
}

// Define the initial state using that type
const initialState: UsersState = {
  data: [],
}

export const UsersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUsers: (state, action: PayloadAction<User[]>) => {
        state.data = action.payload
    }
  },
})

export const { addUsers } = UsersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users

export default UsersSlice.reducer