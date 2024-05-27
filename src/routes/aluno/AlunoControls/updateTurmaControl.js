const pool = require('../../../database')

const update = async (idAluno, idTurma) => {
    const [response] = await pool.query(`update alunos set idTurma = ${parseInt(idTurma)} where rm_aluno = ${parseInt(idAluno)}`)
    return response
}

module.exports = update
