import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Alert} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../store/thunks/thunkUsers";
import {ShowToast} from "../tools/toast";

const Contact = () => {
   const dispatch = useDispatch()
   const formik = useFormik({
	  initialValues: {
		 email: '',
		 firstname: '',
		 lastname: '',
		 message: ''
	  },
	  validationSchema: Yup.object({
		 email: Yup.string()
			.required('Email is required')
			.email('Email is invalid'),
		 firstname: Yup.string()
			.required('First name is required')
			.min(3, 'First name shorter than 3 characters'),
		 lastname: Yup.string()
			.required('Last name is required')
			.min(3, 'Last name shorter than 3 characters'),
		 message: Yup.string()
			.required('Message is required')
			.min(10, 'Message too short')
			.max(500, 'Sorry, message to long')
	  }),
	  onSubmit: (values, {resetForm}) => {
		 dispatch(sendMessage(values))
			.unwrap()
			.then((response) => {
			   resetForm()
			   if (response) ShowToast('success', `Thank you, we'll contact you back`)
			})
			.catch(err => ShowToast('error', 'Sorry, try again later'))
	  }
   })

   return (
	  <>
		 <h1 className="text-center">Contact us</h1>
		 <form className="mt-3 w-50 mx-auto d-flex flex-column" onSubmit={formik.handleSubmit}>
			<div className="form-group">
			   <label htmlFor="email">Email address</label>
			   <input type="email" className="form-control mt-1" placeholder="example@email.com" name="email" {...formik.getFieldProps('email')}/>
			   {(formik.errors.email && formik.touched.email) && <Alert variant="light" className="mt-1">{formik.errors.email}</Alert>}
			</div>
			<div className="form-group mt-2">
			   <label htmlFor="firstname">First name</label>
			   <input type="text" className="form-control mt-1" name="firstname" {...formik.getFieldProps('firstname')}/>
			   {(formik.errors.firstname && formik.touched.firstname) && <Alert variant="light" className="mt-1">{formik.errors.firstname}</Alert>}
			</div>
			<div className="form-group mt-2">
			   <label htmlFor="lastname">Last name</label>
			   <input type="text" className="form-control mt-1" name="lastname" {...formik.getFieldProps('lastname')}/>
			   {(formik.errors.lastname && formik.touched.lastname) && <Alert variant="light" className="mt-1">{formik.errors.lastname}</Alert>}
			</div>
			<div className="form-group mt-2">
			   <label htmlFor="message">Message</label>
			   <textarea className="form-control mt-1" name="message" rows="4" {...formik.getFieldProps('message')}/>
			   {(formik.errors.message && formik.touched.message) && <Alert variant="light" className="mt-1">{formik.errors.message}</Alert>}
			</div>
			<button type="submit" className="btn btn-outline-light mt-2 mx-auto contact-btn">Send message</button>
		 </form>
	  </>
   );
};

export default Contact;
