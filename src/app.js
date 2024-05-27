const express = require("express")
const app = new express()

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routers

// Alunos
const alunoRouter = require('./routes/aluno/alunoRouter')
app.use('/aluno', alunoRouter)

// Turmas
const turmaRouter = require('./routes/turma/turmaRouter')
app.use('/turma', turmaRouter)

module.exports = app