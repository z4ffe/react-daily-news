import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPostById} from "../../store/thunks/thunkPosts";
import Moment from "react-moment";
import {Spinner} from "react-bootstrap";
import {clearPostById} from "../../store/reducers/posts";
import NewsLetter from "../tools/NewsLetter";

const PostComponent = () => {
   const storePost = useSelector(state => state.posts)
   const dispatch = useDispatch()
   let params = useParams()


   useEffect(() => {
	  dispatch(fetchPostById(params.id))
   }, [dispatch])

   useEffect(() => {
	  return () => {
		 dispatch(clearPostById())
	  }
   }, [])

   return (
	  <>
		 {storePost.PostById &&
			<div className="article_container">
			   <h1>{storePost.PostById.title}</h1>
			   <div className="image" style={{background: `url(${storePost.PostById.imagexl})`}}></div>
			   <div className="author">Created by: {storePost.PostById.author} - <Moment
				  format="DD MMMM YYYY">{storePost.PostById.createdAt}</Moment></div>
			   <div className="content mt-3" dangerouslySetInnerHTML={{__html: storePost.PostById.content}}></div>
			</div>}
		 {storePost.loading &&
			<div className="text-center">
			   <Spinner animation="border" role="status">
				  <span className="visually-hidden">Loading</span>
			   </Spinner>
			</div>}
		 <NewsLetter/>
	  </>
   );
};

export default PostComponent;
