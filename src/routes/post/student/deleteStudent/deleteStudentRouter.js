const express = require('express')
const router = express.Router()

const deleteStudent = require('./deleteStudent')

router.post('/', async (req, res) => {
    const id = req.body.id

    const result = await deleteStudent(id)

    res.send('User deleted')
})

module.exports = router