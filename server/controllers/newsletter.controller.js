const httpStatus = require('http-status')
const {Newsletter} = require("../model/newsletter");
const {findEmail} = require("../services/newsletter.service");

const newsletterController = {
   async addNewUserToNewsletter(req, res, next) {
	  try {
		 if (await findEmail(req.body.data.email)) return res.status(httpStatus.OK).send('error')
		 const newsletter = await new Newsletter({email: req.body.data.email})
		 newsletter.save()
		 res.status(httpStatus.OK).send('added')
	  } catch (error) {
		 throw error
	  }
   }
}

module.exports = newsletterController
