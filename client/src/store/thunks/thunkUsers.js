import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = 'https://world-tech-news.vercel.app/api'
const URL_API_LOCAL = 'http://localhost:5005/api'

export const addUserToNewsLetter = createAsyncThunk('users/addUserToNewsLetter', async (data) => {
   try {
	  const response = await axios.post(`${URL_API}/newsletter`, {
		 data
	  })
	  return response.data
   } catch (err) {
	  throw err
   }
})


export const sendMessage = createAsyncThunk('users/sendMessage', async (data) => {
   try {
	  await axios.post(`${URL_API}/contact`, {
		 data
	  })
	  return true
   } catch (err) {
	  throw err
   }
})



