const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getInicio');
const mailRoute = require('./sendMail');
const textoRoute = require('./getText');
const spacesRoute = require('./getSpacesFile');
const versionRoute = require('./getVersion');


router.use('/inicio', verifyToken, inicioRoute)
router.use('/contacto', verifyToken, mailRoute)
router.use('/texto', verifyToken, textoRoute)
router.use('/spacesbo', spacesRoute)
router.use('/version',verifyToken, versionRoute)


module.exports = router;