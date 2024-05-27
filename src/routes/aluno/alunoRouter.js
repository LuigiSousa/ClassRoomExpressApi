const express = require('express')
const router = express.Router()

// Controllers
const createAluno = require('../../controls/createControl')
const getAluno = require('../../controls/getControl')
const deleteAluno = require('../../controls/deleteControl')
const getAlunoById = require('../../controls/getById')

// AlunoControllers
const updateTurma = require('./AlunoControls/updateTurmaControl')

// Class
const Aluno = require('./alunoClass')

// Get All alunos
router.get('/', async (req, res) => {
    const alunos = await getAluno('alunos')
    console.log('GET: /aluno')
    res.send(alunos)
})

// Get aluno by rm_aluno
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const aluno = await getAlunoById('alunos', id)
    if (aluno[0] == undefined) {
        console.log(`GET: /aluno/:${id} (failed)`)
        res.send('O aluno indicado não existe')
    }else {
        console.log(`GET: /aluno/:${id}`)
        res.send(aluno)
    }
})

// Create Aluno
router.post('/create', async (req, res) => {
    const newAluno = new Aluno(req.body.nome, req.body.sobrenome, req.body.email, req.body.password, req.body.idturma)
    // Check if any value is undefined
    if (newAluno.checkValue() == false) {
        res.send('Um parametro está faltando')
        console.log('POST: /aluno/create (failed)')
        return
    }
    const content = [
        newAluno.nome, 
        newAluno.sobrenome,
        newAluno.email,
        newAluno.password,
        newAluno.idturma
    ]
    try {
        const response = await createAluno('alunos', content)
        console.log('POST: /aluno/create')
    }catch (err) {
        console.log('POST: /aluno/create')
        res.send('A turma indicada nao existe')
    }
})

// Update turma 
router.put('/update', async (req, res) => {
    const idAluno = req.body.idAluno
    const idTurma = req.body.idTurma

    if (idAluno == undefined || idTurma == undefined) {
        res.send('Um parametro está faltando')
        console.log('PUT: /aluno/update (failed)')
        return
    }

    const response = await updateTurma(idAluno, idTurma)
    console.log('PUT: /aluno/update')
})

// Delete Aluno
router.delete('/delete', async (req, res) => {
    const id = req.body.id
    const response = await deleteAluno('alunos', id)
    console.log('DELETE: /aluno/delete')
})

module.exports = router