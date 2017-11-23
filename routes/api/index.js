/*
* @Author: askMeWhy
* @Date:   2017-11-15 15:52:33
* @Last Modified by:   bigWave
* @Last Modified time: 2017-11-15 15:55:59
*/
const express = require('express');
const router = express.Router();
const softController = require('../../controller/soft.controller');

router.post('/', softController);

module.exports = router;