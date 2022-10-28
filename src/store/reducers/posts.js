import {createSlice} from "@reduxjs/toolkit";
import {fetchPostById, fetchPosts} from "../thunks/thunkPosts";

export const postsSlice = createSlice({
   name: "posts",
   initialState: {
	  loading: true,
	  articles: {
		 items: []
	  }
   },
   reducers: {
	  clearPostById: (state) => {
		 state.PostById = {}
	  },
   }
   ,
   extraReducers: (builder) => {
	  builder
		 .addCase(fetchPosts.pending, (state) => {
			state.loading = true
		 })
		 .addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = false
			state.articles = action.payload
		 })
		 .addCase(fetchPosts.rejected, (state) => {
			state.loading = false
		 })
		 .addCase(fetchPostById.pending, (state) => {
			state.loading = true
		 })
		 .addCase(fetchPostById.fulfilled, (state, action) => {
			state.loading = false
			state.PostById = action.payload
		 })
		 .addCase(fetchPostById.rejected, (state) => {
			state.loading = false
		 })
   }
})

export const {clearPostById} = postsSlice.actions
export default postsSlice.reducer
