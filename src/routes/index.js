const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getInicio');
const mailRoute = require('./sendMail');
const textoRoute = require('./getText');


router.use('/inicio', verifyToken, inicioRoute)
router.use('/contacto', verifyToken, mailRoute)
router.use('/texto', verifyToken, textoRoute)

module.exports = router;