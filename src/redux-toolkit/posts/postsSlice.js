import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPostsById = createAsyncThunk('posts', async(id=1) => {
    try{
     const response = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     console.log(response)
     if(response.status!==200){
        throw new Error('sorry something went wrong!')
     }
     return response.data
    }
    catch(err){
        return err.message
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {loading: false, post: {}, error: ''},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPostsById.fulfilled, (state, action) => {
            state.loading = false
            state.post = action.payload
            state.error = ''
        })
        builder.addCase(fetchPostsById.rejected, (state, action) => {
            state.loading = false
            state.post = {}
            state.error = action.payload
        })
    }

})

export default postsSlice