import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
// import axios from 'axios';
// const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

// const initialState = {
//   posts: [],
//   status: 'idel',
//   error: null,
// };

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   fetch(POST_URL)
//     .then((res) => res.json())
//     .then((data) => data);
//   const response = await axios.get(POST_URL);
//   return [...response.data];
//   // OR return response.data
// });

// export const addNewPost = createAsyncThunk(
//   'posts/fetchPosts',
//   async (initialPost) => {
//     fetch(POST_URL, initialPost)
//       .then((res) => res.json())
//       .then((data) => data);
//     const response = await axios.get(POST_URL, initialPost);
//     return [...response.data];
//     // OR return response.data
//   }
// );

// export const updatePost = createAsyncThunk(
//   'posts/fetchPosts',
//   async (initialPost) => {
//     const { id } = initialPost;
//     fetch(`${POST_URL}/${id}`, initialPost)
//       .then((res) => res.json())
//       .then((data) => data);
//     const response = await axios.put(`${POST_URL}/${id}`, initialPost);
//     return [...response.data];
//     // OR return response.data
//   }
// );

// export const deletePost = createAsyncThunk(
//   'posts/fetchPosts',
//   async (initialPost) => {
//     const { id } = initialPost;
//     fetch(`${POST_URL}/${id}`)
//       .then((res) => res.json())
//       .then((data) => data);

//     const response = await axios.put(`${POST_URL}/${id}`);
//     if (response?.status === 200) return initialPost;
//     return `${response?.status}: ${response?.statusText}`;
//     OR return response.data
//   }
// );

const postsSlice = createSlice({
  name: 'post',
  initialState: [
    {
      title: 'Post',
      content: 'i wanna keep trying',
      id: '1',
      userId: '1s',
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        perfect: 0,
        coffee: 0,
      },
      date: sub(new Date(), { minutes: 1 }).toISOString(),
    },
  ],
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
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              perfect: 0,
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
    removePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost(state, action) {
      const { id } = action.payload;
      action.payload.date = new Date().toISOString();
      const posts = state.filter((post) => post.id !== id);
      return [...posts, action.payload];
    },
  },

  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchPosts.pending, (state, action) => {
  //       state.posts.status = 'loading';
  //     })
  //     .addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.posts.status = 'succeeded';
  //       let min = 1;
  //       const loadedPost = action.payload.map((post) => {
  //         post.date = sub(new Date(), { minutes: min++ }).toISOString();
  //         post.reactions = {
  //           thumbsUp: 0,
  //           wow: 0,
  //           heart: 0,
  //           rocket: 0,
  //           coffee: 0,
  //         };
  //         return post;
  //       });
  //       state.posts.posts = state.posts.concat(loadedPost);
  //     })
  //     .addCase(fetchPosts.rejected, (state, action) => {
  //       state.posts.status = 'failed';
  //       state.posts.error = action.error.message;
  //     })
  //     .addCase(addNewPost.fulfilled, (state, action) => {
  //       action.payload.userId = Number(action.payload.userId);
  //       action.payload.date = new Date().toISOString();
  //       action.payload.reactions = {
  //         thumbsUp: 0,
  //         wow: 0,
  //         heart: 0,
  //         rocket: 0,
  //         coffee: 0,
  //       };
  //       console.log(action.payload);
  //       state.posts.push(action.payload);
  //     })
  //     .addCase(updatePost.fulfilled, (state, action) => {
  //       if (!action.payload?.id) {
  //         console.log('Update could not complete');
  //         console.log(action.payload);
  //         return;
  //       }
  //       const { id } = action.payload;
  //       action.payload.data = new Date().toISOString();
  //       const posts = state.posts.filter((post) => post.id !== id);
  //       state.posts = [...posts, action.payload];
  //     })
  //     .addCase(deletePost.fulfilled, (state, action) => {
  //       if (!action.payload?.id) {
  //         console.log('Delete could not complete');
  //         console.log(action.payload);
  //         return;
  //       }
  //       const { id } = action.payload;
  //       action.payload.data = new Date().toISOString();
  //       const posts = state.posts.filter((post) => post.id !== id);
  //       state.posts = posts;
  //     });
  // },
});

export const selectAll = (state) => state.posts; // posts from the store
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
export const { addPost, removePost, reactionsAdded, updatePost } =
  postsSlice.actions;
export default postsSlice.reducer;
