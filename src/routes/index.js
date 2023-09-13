const { Router } = require('express');
const axios = require ('axios');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getInicio');


router.use('/inicio', verifyToken, inicioRoute)


module.exports = router;