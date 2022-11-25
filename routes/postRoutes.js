const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers')


router.route("/").get(postControllers.getAllPosts)
router.route("/home").get(postControllers.home)


module.exports = router