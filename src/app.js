const express = require("express")
const app = new express()

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const createStudentRouter = require('./routes/post/student/createStudent/createStudentRouter')
app.use('/createStudent', createStudentRouter)

const deleteStudentRouter = require('./routes/post/student/deleteStudent/deleteStudentRouter')
app.use('/deleteStudent', deleteStudentRouter)

module.exports = app