const { Router } = require('express');
const {getAllInicio, addInicio, getInicioById, putInicio, deleteInicio, getInicioByOrder} = require('../controllers/Inicio')
const router = Router();

router.get('/', getAllInicio)
router.get('/order', getInicioByOrder)
router.get('/:id', getInicioById)
router.post('/', addInicio)
router.put('/:id', putInicio);
router.delete('/:id', deleteInicio);

module.exports = router;