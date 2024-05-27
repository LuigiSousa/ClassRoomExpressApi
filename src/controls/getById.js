const pool = require('../database')

const getById = async (table, id) => {
    switch (table){
        case "alunos":
            const [responseAlunos] = await pool.query(`select * from alunos where rm_aluno = ${parseInt(id)}`)
            return responseAlunos
        case "turmas":
            const [responseTurmas] = await pool.query(`select * from turmas where idturma = ${parseInt(id)}`)
            return responseTurmas
    }
}

module.exports = getById