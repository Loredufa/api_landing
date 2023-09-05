const { Router } = require('express');
const axios = require ('axios');
const router = Router();

const inicioRoute = require('./getInicio');


router.use('/inicio', inicioRoute)


module.exports = router;