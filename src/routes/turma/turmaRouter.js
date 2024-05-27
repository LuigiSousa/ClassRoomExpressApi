const express = require('express')
const router = express.Router()

// Controllers
const getTurmas = require('../../controls/getControl')
const createTurma = require('../../controls/createControl')

// Class
const Turma = require('./turmaClass')

// Get ALL turmas
router.get('/', async (req, res) => {
    const turmas = await getTurmas('turmas')
    console.log('GET: /turma')
    res.send(turmas)
})

// Create turma
router.post('/create', async (req, res) => {
    const newTurma = new Turma(req.body.grau, req.body.turma_name, req.body.alunos_rm_aluno)
    // Check if any value is undefined
    if (newTurma.checkValue() == false) {
        res.send('Um parametro está faltando')
        console.log('POST: /turma/create (failed)')
        return
    }
    const content = [
        newTurma.grau,
        newTurma.turma_name,
        newTurma.alunos_rm_aluno
    ]
    try {
        const response = await createTurma('turmas', content)
        console.log('POST: /turma/create')
    }catch (err) {
        console.log('POST: /turma/create (failed)')
        res.send('O aluno indicado não existe')
    }
})

module.exports = router