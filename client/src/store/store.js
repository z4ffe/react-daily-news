import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import articlesReducer from "./reducers/articles";

export const store = configureStore({
   reducer: {
	  users: usersReducer,
	  articles: articlesReducer
   }
})
