// create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');

// Handle request
router.get('/',commentController.comment_list);
