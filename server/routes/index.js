const express = require('express')
const router = express.Router()
const newsController = require('../controllers/news.controller')
const messageController = require('../controllers/newsletter.controller')
const contactController = require('../controllers/contact.controller')


router.get('/news', newsController.getAllNews)
router.post('/newsletter', messageController.addNewUserToNewsletter)
router.post('/contact', contactController.addNewsMessageToContact)

module.exports = router
