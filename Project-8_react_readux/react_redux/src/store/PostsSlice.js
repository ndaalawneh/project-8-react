import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        console.log(thunkAPI)
        const response = await axios.get('http://127.0.0.1:8000/api/posts')
        return response.data
    }
)

export const addPosts = createAsyncThunk(

    'posts/addPosts',
    async (post, thunkAPI) => {

        const response = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/posts',
            data: post,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        thunkAPI.dispatch(getPosts())
        console.log(response);
        return [response.data]
    })

export const editPosts = createAsyncThunk('posts/editPosts',
    async (post, thunkAPI) => {
        const response = await axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/posts/${post.id}`,
            data: post,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        thunkAPI.dispatch(getPosts())
        console.log(response);
        return [response.data]
    }
)

export const deletePosts = createAsyncThunk('posts/deletePosts',
    async (post, thunkAPI) => {
        const response = await axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/posts/${post.id}`,
            data: post,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        thunkAPI.dispatch(getPosts())
        console.log(response);
        return [response.data]
    }
)

const initialState = {
    posts: [],
    post: {},
    isLoggin: false,
    loading: false,
    message: '',
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload
        }
    },
    extraReducers: {

        // getPosts is a reducer that handles the getPosts action

        [getPosts.pending]: (state, action) => {
            state.loading = true
            state.message = 'am pending'
        },

        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.message = 'am done'
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false
            state.message = 'am soorry'
        },

        //add posts is a reducer that handles the addPosts action
        [addPosts.pending]: (state, action) => {
            state.loading = true
            state.message = 'am pending'
        },
        [addPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.message = 'am done'
        },
        [addPosts.rejected]: (state, action) => {
            state.loading = false
            state.message = 'am soorry'
        },

        //edit posts is a reducer that handles the editPosts action
        [editPosts.pending]: (state, action) => {
            state.loading = true
            state.message = 'am pending'
        },
        [editPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.message = 'am done'
        },
        [editPosts.rejected]: (state, action) => {
            state.loading = false
            state.message = 'am soorry'
        },

        //delete posts is a reducer that handles the deletePosts action
        [deletePosts.pending]: (state, action) => {
            state.loading = true
            state.message = 'am pending'
        },
        [deletePosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.message = 'am done'
        }
        ,
        [deletePosts.rejected]: (state, action) => {
            state.loading = false
            state.message = 'am soorry'
        }
    }
})
export const { setPost } = postSlice.actions
export default postSlice.reducer




