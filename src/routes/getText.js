const { Router } = require('express');
const {getAllText, addText, getTextById, putText, deleteText, getTextByOrder} = require('../controllers/Texto')
const router = Router();

router.get('/', getAllText)
router.get('/order', getTextByOrder)
router.get('/:id', getTextById)
router.post('/', addText)
router.put('/:id', putText);
router.delete('/:id', deleteText);

module.exports = router;