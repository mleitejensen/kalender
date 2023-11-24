const { Router } = require('express');
const authController = require('../controllers/formsController');

const router = Router();

router.get('/forms', authController.form_get);
router.post('/forms', authController.form_post);


module.exports = router;