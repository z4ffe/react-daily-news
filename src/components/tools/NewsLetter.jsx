import React, {useRef} from 'react';
import {Form, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addUserToNewsLetter} from "../../store/thunks/thunkUsers";
import {ShowToast} from '../tools/toast'
import {clearNewsLetter} from "../../store/reducers/users";

const NewsLetter = () => {
   const textInput = useRef()
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
	  e.preventDefault()
	  const value = textInput.current.value
	  dispatch(addUserToNewsLetter({email: value}))
		 .unwrap()
		 .then(res => {
			if (res.newsletter === 'added') {
			   ShowToast('success', 'You are subscribed for newsletter')
			} else {
			   ShowToast('error', 'This email already exist')
			}
		 })
	  textInput.current.value = null
	  dispatch(clearNewsLetter())
   }

   return (
	  <div className="newsletter_container">
		 <h1>Join our news letter</h1>
		 <div className="form">
			<Form onSubmit={handleSubmit} className="mt-4 d-flex flex-column">
			   <Form.Group>
				  <Form.Control className="w-75 m-auto" type="email" placeholder="example@gmail.com"
								name="main"
								ref={textInput}></Form.Control>
			   </Form.Group>
			   <Button className="mt-2 w-50 align-self-center" variant="primary" type="submit">Add me to the
				  list</Button>
			</Form>
		 </div>
	  </div>
   );
};

export default NewsLetter;
