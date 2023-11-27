const { Router } = require('express');
const authController = require('../controllers/formsController');

const router = Router();

router.get('/december', authController.form_get);
router.post('/december/1', authController.form_post);


module.exports = router;