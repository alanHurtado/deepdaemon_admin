const express = require('express');
const { viewAllProject, insertProject, deleteProject, updateProject } = require('../controllers/project');
const router = express.Router();

//ver todos los datos
router.get('/', viewAllProject );
//Insertar datos
router.post('/', insertProject );
//Editar datos
router.put('/', updateProject);
//Eliminar datos
router.delete('/', deleteProject );

module.exports = router;