const express = require('express');
const { create, read, update, del, manageRoles, accessAdminPanel } = require('../controllers/roleController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');
const router = express.Router();


router.post('/create', authenticate, authorize(['Admin', 'User', 'Moderator']), create);  

router.get('/read', authenticate, authorize(['Admin', 'User', 'Moderator']), read);

router.put('/update', authenticate, authorize(['Admin', 'User', 'Moderator']), update);

router.delete('/delete', authenticate, authorize(['Admin', 'User','Moderator']), del); 

router.post('/manage-roles', authenticate, authorize(['Admin']), manageRoles); 

router.get('/access-admin-panel', authenticate, authorize(['Admin']), accessAdminPanel);

module.exports = router;