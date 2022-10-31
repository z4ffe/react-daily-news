import {createSlice} from "@reduxjs/toolkit";
import {fetchArticles, fetchContentById} from "../thunks/thunkArticles";

export const articlesSlice = createSlice({
   name: "articles",
   initialState: {
	  loading: true,
	  news: [],
	  page: 1,
	  end: false,
   },
   reducers: {
	  articleById: (state, action) => {
		 state.articleById = action.payload
	  },
	  clearArticleById: (state) => {
		 state.arcticleById = {}
	  }
   },
   extraReducers: (builder) => {
	  builder
		 .addCase(fetchArticles.pending, (state) => {
			state.loading = true
		 })
		 .addCase(fetchArticles.fulfilled, (state, action) => {
			state.loading = false
			// state.news = [...state.news, ...action.payload.news.articles] // for real-api
			state.news = [...state.news, ...action.payload.news] // local json-server articles
			state.end = action.payload.end  // local json-server end-of-articles
			state.page = +action.payload.page.page
		 })
		 .addCase(fetchArticles.rejected, (state, action) => {
			state.loading = false
		 })
		 .addCase(fetchContentById.fulfilled, (state, action) => {
			console.log(action.payload)
		 })
   }
})

export const {articleById} = articlesSlice.actions
export default articlesSlice.reducer
