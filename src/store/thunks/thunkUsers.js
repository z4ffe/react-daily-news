import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//const URL_SERVER = "http://localhost:3000"
const URL_SERVER_HEROKU = "https://react-daily-news.herokuapp.com/"

export const addUserToNewsLetter = createAsyncThunk('users/addUserToNewsLetter', async (data) => {
   try {
	  //const findUser = await axios.get(`${URL_SERVER}/newsletter?email=${data.email}`)
	  const findUser = await axios.get(`${URL_SERVER_HEROKU}/newsletter?email=${data.email}`)
	  if (!Array.isArray(findUser.data) || !findUser.data.length) {
		 const response = await axios({
			method: 'POST',
			//url: `${URL_SERVER}/newsletter`,
			url: `${URL_SERVER_HEROKU}/newsletter`,
			data: {
			   email: data.email
			}
		 });
		 return {newsletter: 'added', email: response.data}
	  } else {
		 return {newsletter: 'failed'}
	  }
   } catch (err) {
	  throw err
   }
})


export const sendMessage = createAsyncThunk('users/sendMessage', async (data) => {
   try {
	  //await axios({method: "POST", url: `${URL_SERVER}/contact`, data: data})
	  await axios({method: "POST", url: `${URL_SERVER_HEROKU}/contact`, data: data})
	  return true
   } catch (err) {
	  throw err
   }
})



