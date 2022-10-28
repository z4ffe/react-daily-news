import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERVER = "http://localhost:3000"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({
																		 page = 1,
																		 order = "asc",
																		 limit = "10"
																	  }, {getState}) => {
   try {
	  const response = await axios(`${URL_SERVER}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`)
	  const prevState = getState().posts;
	  return {
		 items: [...prevState.articles.items, ...response.data],
		 page: page,
		 end: !response.data.length
	  }

   } catch (err) {
	  throw err
   }
})


export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id) => {
   try {
	  const response = await axios(`${URL_SERVER}/posts/${id}`)
	  return response.data

   } catch (err) {
	  throw err
   }
})
