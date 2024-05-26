const pool = require('../database')

const getById = async (table, id) => {
    switch (table){
        case "alunos":
            const [response] = await pool.query(`select * from alunos where rm_aluno = ${parseInt(id)}`)
            return response
    }
}

module.exports = getById