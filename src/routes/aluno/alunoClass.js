class Aluno {

    constructor (nome, sobrenome, email, password, idturma) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.email = email,
        this.password = password
        this.idturma = idturma
    }

    createdAluno() {
        console.log(`New aluno created: ${this.nome} ${this.sobrenome}`)
    }

    checkValue() {
        if (this.nome == undefined || this.sobrenome == undefined || this.email == undefined || this.password == undefined || this.idturma == undefined) {
            return false
        }else {
            return true
        }
    }
}

module.exports = Aluno