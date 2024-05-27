const pool = require('../database')

const get = async (table) => {
    switch (table){
        case "alunos":
            const [responseAlunos] = await pool.query(`select * from alunos`)
            return responseAlunos
        case "turmas":
            const [responseTurmas] = await pool.query(`select * from turmas`)
            return responseTurmas
    }
}

module.exports = get