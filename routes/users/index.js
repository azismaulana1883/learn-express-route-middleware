const express = require('express');
const router = express.Router();

const UserControllers = require('../../controllers/user/user');

// Create User
router.post('/create', UserControllers.CreateUser);

// Update User
router.put('/update/:id', UserControllers.UpdateUser);

// Delete User
router.delete('/delete/:id', UserControllers.DeleteUser);

// Read Users
router.get('/read', UserControllers.ReadUser);

module.exports = router;
