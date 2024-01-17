const express = require('express');
const userAPI = require('../../controller/userAPI');
const router = express.Router();

router.use(express.urlencoded({extended : false}));

// Handling Get Request

router.get('/', userAPI.getAllUsers).get('/:id', userAPI.getUserById);


// Handling Post Request

router.post('/', userAPI.postUser);


// Handling Patch Request
router.patch('/:id', userAPI.patchUserByID)

// Handling Delete Request
router.delete('/:id', userAPI.deleteUserByID);

module.exports = router;