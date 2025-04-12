const express = require('express');
const router = express.Router();
const { logAnalytics, getLinkAnalytics } = require('../controllers/analyticsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:linkId', logAnalytics);
router.get('/:linkId', authMiddleware, getLinkAnalytics);

module.exports = router;