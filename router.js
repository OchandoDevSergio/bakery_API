
const router = require('express').Router();

const productionsRouter = require('./views/productionsRouter.js');

//Routing......

router.use('/api/productions', productionsRouter);

module.exports = router;