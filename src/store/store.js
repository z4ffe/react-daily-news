import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./reducers/posts";
import usersReducer from "./reducers/users";

export const store = configureStore({
   reducer: {
	  posts: postsReducer,
	  users: usersReducer
   }
})
