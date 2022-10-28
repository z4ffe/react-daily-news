import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/thunks/thunkPosts";
import Masonry from "react-masonry-css";
import Moment from "react-moment";
import {LinkContainer} from "react-router-bootstrap";
import {Button, Spinner} from "react-bootstrap";

const HomePosts = () => {
   const storePosts = useSelector((state) => state.posts)
   const dispatch = useDispatch()

   useEffect(() => {
	  if (storePosts.articles.items.length <= 0) dispatch(fetchPosts({
		 page: 1,
		 order: "asc",
		 limit: "6"
	  }))
   }, [dispatch])

   const loadMorePosts = () => dispatch(fetchPosts({
	  page: `${Number(storePosts.articles.page) + 1}`,
	  order: "asc",
	  limit: "6"
   }))


   return (
	  <>
		 <Masonry breakpointCols={{default: 3, 800: 2, 400: 1}} className="my-masonry-grid"
				  columnClassName="my-masonry-grid_column">
			{storePosts && storePosts.articles.items.map(post => (
			   <div key={post.id}>
				  <img style={{objectFit: "cover", width: "100%", height: "200px"}} src={`${post.image}?${post.id}`} alt="post-pic"/>
				  <div className="author">
					 <span>{post.author} - </span>
					 <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
				  </div>
				  <div className="content">
					 <div className="title">{post.title}</div>
					 <div className="excerpt">{post.excerpt}</div>
					 <LinkContainer className="mt-3" to={`/article/${post.id}`}>
						<Button variant="light">Read more</Button>
					 </LinkContainer>
				  </div>
			   </div>
			))}
		 </Masonry>
		 {storePosts.loading &&
			<div className="text-center">
			   <Spinner animation="border" role="status">
				  <span className="visually-hidden">Loading</span>
			   </Spinner>
			</div>}
		 {(!storePosts.articles.end && !storePosts.loading) &&
			<Button variant="outline-dark" onClick={() => loadMorePosts()}>Load more posts</Button>}
	  </>
   );
};

export default HomePosts;
