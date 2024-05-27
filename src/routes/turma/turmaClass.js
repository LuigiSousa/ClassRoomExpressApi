// Controller
const getAlunoById = require('../../controls/getById')

class Turma {

    constructor (grau, turma_name, alunos_rm_aluno) {
        this.grau = grau,
        this.turma_name = turma_name,
        this.alunos_rm_aluno = alunos_rm_aluno
    }

    checkValue() {
        if (this.grau == undefined || this.turma_name == undefined || this.alunos_rm_aluno == undefined) {
            return false
        }else {
            return true
        }
    }
}

module.exports = Turma