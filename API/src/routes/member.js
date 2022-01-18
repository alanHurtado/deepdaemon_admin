const express = require('express');
const { viewAllMember, insertMember, deleteMember } = require('../controllers/member');
const router = express.Router();

//ver todos los datos
router.get('/',viewAllMember );
//Insertar datos
router.post('/', insertMember );
//Eliminar datos
router.delete('/',deleteMember);

module.exports = router;