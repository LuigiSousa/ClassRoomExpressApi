const express = require('express')
const router = express.Router()

// Controllers
const createAluno = require('../../controls/createControl')
const getAluno = require('../../controls/getControl')
const deleteAluno = require('../../controls/deleteControl')
const getAlunoById = require('../../controls/getById')

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
    console.log(`GET: /aluno/:${id}`)
    res.send(aluno)
})

// Create Aluno
router.post('/create', async (req, res) => {
    const newAluno = new Aluno(req.body.nome, req.body.sobrenome, req.body.email, req.body.password)
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
        newAluno.password
    ]
    const response = await createAluno('alunos', content)
    console.log('POST: /aluno/create')
})

// Delete Aluno
router.delete('/delete', async (req, res) => {
    const id = req.body.id
    const response = await deleteAluno('alunos', id)
    console.log('DELETE: /aluno/delete')
})

module.exports = router