
const router = require('express').Router();

const productionsController = require('../controllers/productionsController');


router.get('/', productionsController.getAllProductions);
router.post('/', productionsController.reportProduction);
router.get('/dates', productionsController.getProductionsInTime);


module.exports = router;