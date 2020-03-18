const router = require('express').Router()
const {Employee} = require('../models')

router.get('/employees', (request, response) => {
  Employee.find()
  .then(employees => response.json(employees))
  .catch( error => {
    console.error(error)
    response.sendStatus(400)
  })
})

module.exports = router