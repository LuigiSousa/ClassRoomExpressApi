const pool = require('../database')

const get = async (table) => {
    switch (table){
        case "alunos":
            const [response] = await pool.query(`select * from alunos`)
            return response
    }
}

module.exports = get