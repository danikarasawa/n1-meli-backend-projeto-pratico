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

exports.getData = (req, res) => {
    const tarefasData = tarefas.sort((a, b) => {
        if (new Date(a.dataInclusao) > new Date(b.dataInclusao)) {
            return 1;
        }
        if (new Date(a.dataInclusao) < new Date(b.dataInclusao)) {
            return -1;
        }
        return 0;
    });
    res.status(200).send(tarefasData);
};

//https://en.proft.me/2015/11/14/sorting-array-objects-number-string-date-javascrip/
//https://flaviocopes.com/how-to-sort-array-by-date-javascript/
//https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
//https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value

//tolocale + datetime (pt-BR en-US)

//SOLUCAO PARCIAL HELENA STRADA
// console.log(tarefas.map(t => t.dataInclusao))
// res.status(200).send();

//dataInclusao 
//mapear por dataInclusao
//calcular da data mais recente até a mais antiga 
//mostra a nossa lista ordenada 

// VERIFICAR ESSA OPÇÃO POR DATA DE CONCLUSÃO 
//     const tarefaPronta = tarefas.filter(tarefa => tarefa.concluido == "true")
//     const quebraData = tarefaPronta.split('/')

//     const anoDeIn = (quebraData[2])
//     if (isNaN(anoDeIn))
//         return false

//     const mesDeIn = parseInt(quebraData[1])
//     if (isNaN(mesDeIn))
//         return false

//     const diaDeIn = parseInt(quebraData[0])
//     if (isNaN(diaDeIn))
//         return false

//     const dataPronta = calcularData(anoDeIn, mesDeIn, diaDeIn)

//     res.status(200).send({dataPronta})
// }

// function calcularData(anoDeIn, mesDeIn, diaDeIn) {
//     const now = new Date()
//     const anoAtual = now.getFullYear()
//     const mesAtual = now.getMonth() + 1
//     const hoje = now.getDate()

//     let data = anoAtual - anoDeIn

//     if (mesAtual < mesDeIn || (mesAtual == mesDeIn && hoje < diaDeIn)) {
//         data -= 1
//     }
//     return data
// }