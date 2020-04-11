import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        users: [{ title: "test user", age: 14 }],
        posts: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        addPosts: (state, action) => {
            state.posts = state.posts.concat(action.payload)
        }
    },
});

export const { addUser, addPosts } = dataSlice.actions

export default dataSlice.reducer;
