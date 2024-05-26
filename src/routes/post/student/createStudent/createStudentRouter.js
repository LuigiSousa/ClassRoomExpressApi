const express = require('express')
const Router = express.Router()

const createStudent = require('./createStudent')

class Student {
    constructor (name, surname, email, password) {
        this.name = name, 
        this.surname = surname,
        this.email = email,
        this.password = password
    }
}

Router.post('/', async (req, res) => {
    const newStudent = new Student(
        req.body.name, req.body.surname, req.body.email, req.body.password
    )

    const result = await createStudent(newStudent.name, newStudent.surname, newStudent.email, newStudent.password)

    console.log(newStudent)

    res.send('User created')
})

module.exports = Router