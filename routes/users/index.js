const express = require('express');
const router = express.Router();

const UserControllers = require('../../controllers/user/user');

// Update User
router.put('/:id', UserControllers.UpdateUser);

// Delete User
router.delete('/:id', UserControllers.DeleteUser);

// Read Users
router.get('/', UserControllers.ReadUser);

// Read Single User
router.get('/:id', UserControllers.Show);

module.exports = router;
