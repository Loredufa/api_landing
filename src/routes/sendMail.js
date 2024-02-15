const { Router } = require('express');
const {sendMailContact, getAllcontactos, deleteContactos, putContactos} = require('../controllers/ContactoMail')

const router = Router();

router.post('/', sendMailContact);
router.get('/', getAllcontactos);
router.put('/:id', putContactos);
router.delete('/:id', deleteContactos);



module.exports = router;