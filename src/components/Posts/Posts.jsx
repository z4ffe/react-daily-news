import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Moment from "react-moment";
import {clearPostById} from "../../store/reducers/posts";
import {articleById} from "../../store/reducers/articles";

const PostComponent = () => {
   const storeArticle = useSelector(state => state.articles)
   const dispatch = useDispatch()
   const params = useParams()


   useEffect(() => {
	  dispatch(articleById(storeArticle.news[params.id]))
   }, )

   useEffect(() => {
	  return () => {
		 dispatch(clearPostById())
	  }
   }, [dispatch])

   return (
	  <>
		 {storeArticle.articleById &&
			<div className="article_container">
			   <h1>{storeArticle.articleById.title}</h1>
			   <img src={storeArticle.articleById.urlToImage} alt=""/>
			   <div className="author">Author: {storeArticle.articleById.author} - <Moment
				  format="DD MMMM YYYY">{storeArticle.articleById.publishedAt}</Moment></div>
			   <div className="content mt-3">{storeArticle.articleById.content}</div>
			</div>}
	  </>
   );
};

export default PostComponent;
