const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication.controllers');

router.post('/signin', authController.signin);

router.post('/signup', authController.createUser);

router.get('/logout', authController.logout);

router.get('/whoami', authController.whoami);

module.exports = router;