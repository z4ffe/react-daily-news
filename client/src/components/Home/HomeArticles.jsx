import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles} from "../../store/thunks/thunkArticles";
import Masonry from "react-masonry-css";
import Moment from "react-moment";
import {LinkContainer} from "react-router-bootstrap";
import {Button, Spinner} from "react-bootstrap";

const HomeArticles = () => {
   const storeArticles = useSelector((state) => state.articles)
   const dispatch = useDispatch()

   useEffect(() => {
	  if (storeArticles.news.length <= 0) dispatch(fetchArticles({page: 1}))
   }, [])

   const loadMorePosts = () => dispatch(fetchArticles({
	  page: `${Number(storeArticles.page) + 1}`
   }))

   return (
	  <>
		 <Masonry breakpointCols={{default: 3, 800: 2, 400: 1}} className="my-masonry-grid"
				  columnClassName="my-masonry-grid_column">
			{storeArticles && storeArticles.news.map((post, idx) => (
			   <div key={idx} className="content__wrapper pb-2">
				  <img src={post.urlToImage} alt="post-pic"/>
				  <div className="author">
					 <span>{post.author}</span>
					 <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
				  </div>
				  <div className="content">
					 <LinkContainer className="mt-2 align-self-center" to={`/article/${idx}`}
									style={{cursor: "pointer"}}>
						<div className="article-title">{post.title}</div>
					 </LinkContainer>
					 <div className="excerpt">{post.description}</div>
				  </div>
				  <LinkContainer className="mt-2 align-self-center" to={`/article/${idx}`}>
					 <Button variant="dark" className="text-opacity-75 text-white d-block w-50 mx-auto">Read
						more</Button>
				  </LinkContainer>
			   </div>
			))}
		 </Masonry>
		 {storeArticles.loading &&
			<div className="text-center">
			   <Spinner animation="border" role="status">
				  <span className="visually-hidden">Loading</span>
			   </Spinner>
			</div>}
		 {(!storeArticles.end && !storeArticles.loading) &&
			<Button variant="outline-light" className="mx-auto d-block text-white opacity-75"
					onClick={() => loadMorePosts()}>Load more news</Button>}
	  </>
   );
};

export default HomeArticles;
