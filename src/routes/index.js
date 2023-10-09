const { Router } = require('express');
const axios = require ('axios');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getInicio');
const mailRoute = require('./sendMail');

router.use('/inicio', verifyToken, inicioRoute)
router.use('/contacto', verifyToken, mailRoute)

module.exports = router;