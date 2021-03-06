// Acts as an accumulator of all user routes
const express = require('express');

const router = express.Router();

const commonPostApi = require('./common-post-api');

// all calls will be forwarded to postApi
// TODO: add different routers for different routes
router.use(commonPostApi);

module.exports = router;
