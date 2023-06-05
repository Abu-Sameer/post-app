import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), name: 'Adesoye Yusuf' },
  { id: nanoid(), name: 'Adesoye Ibrahim' },
  { id: nanoid(), name: 'Adesoye AbdulLateef' },
];

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const sellectAllUsers = (state) => state.users;
export default userReducer.reducer;
