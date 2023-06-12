import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [
  { id: '1s', name: 'Adesoye Yusuf' },
  { id: 's1', name: 'Adesoye Ibrahim' },
  { id: 'ss', name: 'Adesoye AbdulLateef' },
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  fetch(USER_URL)
    .then((res) => res.json())
    .then((data) => data);

  // const resp = await axios.get(USER_URL)
  // return resp.data
});

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //     return action.payload;
  //   });
  // },
});

export const sellectAllUsers = (state) => state.users;
export default userReducer.reducer;
