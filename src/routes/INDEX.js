const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.status(200).send({
        title: 'Reprograma Turma MELI - Projeto Prático 1.0',  
        version: '0.0.1',
        status: 'Vamu, Dani!'
    })
})

module.exports = router



