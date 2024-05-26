const pool = require('../../../../database')

const deleteStudent = async (id) => {
    const [result] = await pool.query(`
    delete from alunos where Rm_Aluno = ${parseInt(id)}`)

    return result
}

module.exports = deleteStudent