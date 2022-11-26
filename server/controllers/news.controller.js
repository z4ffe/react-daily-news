const httpStatus = require('http-status')
const {News} = require("../model/news");

const newsController = {
   async getAllNews(req, res, next) {
	  console.log(req.query);
	  try {
		 const news = await News.find({}).skip(req.query.page).limit(req.query.limit)
		 res.status(httpStatus.OK).json(news)
	  } catch (error) {
		 throw error
	  }
   }
}

module.exports = newsController

