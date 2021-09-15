const express = require('express');
const router = express.Router();
const linkController = require('../controllers/links.controllers');

router.post('/add', linkController.addLink);
router.get('/', linkController.getLinks);
router.delete('/delete/:id', linkController.deleteLink);
router.get('/edit/:id', linkController.getLink);
router.put('/edit/:id', linkController.updateLink);

module.exports = router;