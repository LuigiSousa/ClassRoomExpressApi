const pool = require('../database')

const create = async (table, content) => {
    switch (table){
        case "alunos":
            const [response] = await pool.query(`insert into alunos (nome, sobrenome, email, password)
            values ('${content[0]}', '${content[1]}', '${content[2]}', '${content[3]}')`)
            return response
    }
}

module.exports = create