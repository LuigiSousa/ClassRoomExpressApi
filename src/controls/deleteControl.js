const pool = require('../database')

const create = async (table, id) => {
    switch (table){
        case "alunos":
            const [response] = await pool.query(`delete from alunos where rm_aluno = ${parseInt(id)}`)
            return response
    }
}

module.exports = create