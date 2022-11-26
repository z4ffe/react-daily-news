const {Contact} = require("../model/conact");
const httpStatus = require("http-status");

const contactController = {
   async addNewsMessageToContact(req, res, next) {
	  try {
		 const message = await new Contact(req.body.data)
		 message.save()
		 res.status(httpStatus.OK).json(message)
	  } catch (error) {
		 throw error
	  }
   }
}

module.exports = contactController
