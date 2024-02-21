const { Router } = require('express');
const {getAllVersion, addVersion, getVersionById, putVersion, deleteVersion} = require('../controllers/Versiones')
const router = Router();

router.get('/', getAllVersion)
router.get('/:id', getVersionById)
router.post('/', addVersion)
router.put('/:id', putVersion);
router.delete('/:id', deleteVersion);

module.exports = router; 