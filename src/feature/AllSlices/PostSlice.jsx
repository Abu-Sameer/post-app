import { createSlice, nanoid } from '@reduxjs/toolkit';
// import {sub} from 'date-fns'

// const initialState = [
//   {
//     id: 1,
//     title: 'Learing Redux Toolkit',
//     content: 'I have heard good things about it',
//     date: sub(new Date(), {minutes: 10}).toISOString()
//   },
//   {
//     id: 2,
//     title: 'Slices...',
//     content: 'The more i say slice , the more i want pizza',
//     date: sub(new Date(), {minutes: 5}).toISOString()
//   },
// ];

const postsSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            // date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const selectAll = (state) => state.posts; // posts from the store
export const { addPost, removePost, reactionsAdded } = postsSlice.actions;
export default postsSlice.reducer;
