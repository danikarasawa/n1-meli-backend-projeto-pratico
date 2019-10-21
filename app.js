const express = require("express")
const app = express()

//CRIAÇÃO DE ROTAS PADRÃO E OUTRAS NECESSÁRIAS

//AJUSTAR ISSO PARA TAREFAS!!!
// const index = require("./routes/index")
// const alunas = require("./routes/alunasRoute")
// const professoras = require("./routes/professorasRoute")

app.use("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app //SE QUISER USAR EM OUTRO LUGAR É SÓ CHAMAR O MÓDULO
