import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

/*const URL_SERVER = 'https://newsapi.org/v2/everything?sources=techcrunch&apiKey=d9e92bc94dba43ba86f5a522615933cd&pageSize=6'*/
const URL_SERVER = 'https://newsapi.org/v2/everything?sources=the-verge&apiKey=d9e92bc94dba43ba86f5a522615933cd&pageSize=6'

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async ({page = 1}, {getState}) => {
   try {
	  const response = await axios({
		 method: 'GET',
		 url: `${URL_SERVER}&page=${page}`
	  })
	  return {
		 news: response.data,
		 page: {page},
	  }
   } catch (err) {
	  throw err
   }
})

export const fetchContentById = createAsyncThunk('articles/fetchContentById', async ({id = 1}, {getState}) => {
   try {
	  const response = await axios({
		 method: 'GET',
		 url: 'https://api.newscatcherapi.com/v2/search',
		 params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
		 headers: {
			'x-api-key': 'aJidQI82qvTHxFh9a2Hy_hdldpfX2D-H09ghaQ_IdRE'
		 }
	  })
	  return response
   } catch (err) {
	  throw err
   }
})
