const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}