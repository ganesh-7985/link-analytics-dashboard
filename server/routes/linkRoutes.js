const express = require('express');
const router = express.Router();
const { createLink, getLinks, redirectLink } = require('../controllers/linkController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createLink);
router.get('/', authMiddleware, getLinks);
router.get('/:shortCode', redirectLink);

module.exports = router;