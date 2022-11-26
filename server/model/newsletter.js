const mongoose = require('mongoose')

const newsletterSchema = mongoose.Schema({
   email: {
	  type: String,
	  required: true,
	  trim: true,
	  unique: true,
	  lowercase: true
   },
   date: {
	  type: Date,
	  default: Date.now
   }
})

const Newsletter = mongoose.model('Newsletter', newsletterSchema)
module.exports = {Newsletter}

