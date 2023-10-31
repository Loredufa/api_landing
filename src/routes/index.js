const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getInicio');
const mailRoute = require('./sendMail');
const textoRoute = require('./getText');
const spacesRoute = require('./getSpacesFile');


router.use('/login', verifyToken, inicioRoute)
router.use('/landing/contacto', verifyToken, mailRoute)
router.use('/landing/texto', verifyToken, textoRoute)
router.use('/landing/spaces', spacesRoute)


module.exports = router;