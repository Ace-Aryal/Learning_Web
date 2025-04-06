// features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async action with createAsyncThunk
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',  // Action type
    async (userId, thunkAPI) => {
        // Make API request here
        const response = await fetch(`/api/posts?userId=${userId}`);
        const data = await response.json();
        return data;  // This will be the action payload
    }
);

// Create slice with extraReducers to handle async actions
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',  // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;  // The result from the API
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;


// ********************************************************************************************



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';  // Import your async thunk

const PostsComponent = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);  // Access state

    useEffect(() => {
        // Dispatch async thunk when component mounts
        dispatch(fetchPosts(1));  // Replace '1' with the userId you want
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

// export default PostsComponent;

