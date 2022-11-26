const {Newsletter} = require("../model/newsletter");

async function findEmail(email) {
   try {
	  const mail = await Newsletter.findOne({email: email})
	  if (mail) return mail
   } catch (error) {
	  throw error
   }
}

module.exports = {findEmail}
