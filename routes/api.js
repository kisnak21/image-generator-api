const express = require('express');
const { generateImage } = require('../controller/openAi');

const router = express.Router()

router.post('/images', generateImage)

module.exports = router;