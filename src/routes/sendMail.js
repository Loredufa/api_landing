const { Router } = require('express');
const {sendMailContact, getAllcontactos, deleteContactos} = require('../controllers/ContactoMail')

const router = Router();

router.post('/', sendMailContact);
router.get('/', getAllcontactos)
router.delete('/:id', deleteContactos)



module.exports = router;