const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/admin', adminController.createAdmin);
router.get('/admin/:id', adminController.getAdminById);
router.get('/admins', adminController.getAllAdmins);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);


module.exports = router;
