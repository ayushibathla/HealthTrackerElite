const usercontroller = require('../controller/usercontroller');
const verifytoken = require('../config/jwtconfig');
const express = require('express');
const router = express.Router();

router.post('/register',usercontroller.register);
router.post('/login',usercontroller.login);
router.post('/logout',usercontroller.logout);

router.get('/:id',verifytoken,usercontroller.getuser);
router.get('/activities',verifytoken,usercontroller.getAllUsers);// The verifytoken middleware intercepts the request to check if the user is authenticated.

router.patch('/profile/:id/image',verifytoken,usercontroller.uploadProfilePicture);
router.patch('/:id/:userId/add',usercontroller.addLike)
router.patch('/id/:userId/remove',usercontroller.removeLike);

exports.router = router;