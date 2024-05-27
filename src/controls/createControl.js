const pool = require('../database')

const create = async (table, content) => {
    switch (table){
        case "alunos":
            const [responseAlunos] = await pool.query(`insert into alunos (nome, sobrenome, email, password, idturma)
            values ('${content[0]}', '${content[1]}', '${content[2]}', '${content[3]}', '${content[4]}')`)
            return responseAlunos
        case "turmas":
            const [responseTurmas] = await pool.query(`insert into turmas (grau, turma_name, alunos_rm_aluno)
            value ('${content[0]}', '${content[1]}', '${content[2]}')`)
            return responseTurmas
    }
}

module.exports = create