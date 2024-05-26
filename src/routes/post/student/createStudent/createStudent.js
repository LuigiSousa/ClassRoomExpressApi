const pool = require('../../../../database')

const createStudent = async (name, surname, email, password) => {
    const [result] = await pool.query(`
    insert into alunos (Nome, Sobrenome, Email, Password) 
    values ('${name}', '${surname}', '${email}', '${password}')`)

    return result
}

module.exports = createStudent