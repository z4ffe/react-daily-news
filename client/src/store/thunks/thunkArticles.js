import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_API_NEWS = 'https://newsapi.org/v2/everything?sources=the-verge&apiKey=d9e92bc94dba43ba86f5a522615933cd&pageSize=6'
const URL_API = 'https://world-tech-news.vercel.app/api/news'
const URL_API_LOCAL = 'http://localhost:5005/api/news'

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async ({page}, {getState}) => {
   try {
	  const response = await axios({
		 method: 'GET',
		 url: `${URL_API_LOCAL}?limit=6&page=${page}`
	  })
	  console.log(response.data.length)
	  return {
		 news: response.data,
		 page: {page},
		 end: response.data.length === 0 ? true : false
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
