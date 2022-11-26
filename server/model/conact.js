const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
   email: {
	  type: String,
	  required: true
   },
   firstname: {
	  type: String,
	  required: true
   },
   lastname: {
	  type: String,
	  required: true
   },
   message: {
	  type: String,
	  required: true
   },
   date: {
	  type: Date,
	  default: Date.now
   }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = {Contact}
