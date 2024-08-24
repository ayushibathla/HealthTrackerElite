const activitycontroller = require('../controller/activitycontroller');
const verifytoken = require('../config/jwtconfig');

const express = require('express');
const router = express.Router();

router.get('/:activityId',verifytoken,activitycontroller.findoneactivity);
router.post('/',verifytoken,activitycontroller.createnewactivity);
router.delete('/:activityId',activitycontroller.deleteActivity);
router.patch('/:activityId/update',verifytoken,activitycontroller.updateActivity);

exports.router = router;