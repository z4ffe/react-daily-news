import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERVER = "https://react-daily-news.herokuapp.com"

export const addUserToNewsLetter = createAsyncThunk('users/addUserToNewsLetter', async (data) => {
   try {
	  const findUser = await axios.get(`${URL_SERVER}/newsletter?email=${data.email}`)
	  console.log(findUser.data);
	  if (!Array.isArray(findUser.data) || !findUser.data.length) {
		 const response = await axios({
			method: 'POST',
			url: `${URL_SERVER}/newsletter`,
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
	  await axios({method: "POST", url: `${URL_SERVER}/contact`, data: data})
	  return true
   } catch (err) {
	  throw err
   }
})



