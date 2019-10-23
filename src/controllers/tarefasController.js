const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 4 || id <= 0) {
        res.redirect(301, "https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/07/erro-404.jpg")
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}

exports.getDone = (req, res) => {
    const tarefaPronta = tarefas.filter(tarefa => tarefa.concluido == "true")

    res.status(200).send(tarefaPronta)
}

exports.getName = (req, res) => {
    const nomeColaboradora = req.params.nome

    if (!nomeColaboradora) {
        res.redirect(301, "https://www.reprograma.com.br")
    }

    res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaboradora == nomeColaboradora))
}