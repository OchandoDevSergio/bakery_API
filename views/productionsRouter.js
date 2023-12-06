
const router = require('express').Router();

const productionsController = require('../controllers/productionsController');


router.get('/', productionsController.getAllProductions);
router.post('/', productionsController.reportProduction);
router.post('/dates', productionsController.getProductionsInTime);

//Se ha empleado una solicitud POST para traer las producciones filtradas por 
//fecha en lugar de una solicitud GET, puesto que axios.get no permite mandar un 
//bodycomo sgundo ardgumento, sólo permite mandar parámetros en la propia URL


module.exports = router;