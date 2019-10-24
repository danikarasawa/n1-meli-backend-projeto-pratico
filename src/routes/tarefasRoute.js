const express = require('express')
const router = express.Router()

const controllerTarefas = require('../controllers/tarefasController')

router.get('/', controllerTarefas.get) 
router.get('/data', controllerTarefas.getData)
router.get('/pronta', controllerTarefas.getDone)
router.get('/:id', controllerTarefas.getById)
router.get('/buscar/:nome', controllerTarefas.getName)

module.exports = router