import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERVER = "http://localhost:3000"

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


