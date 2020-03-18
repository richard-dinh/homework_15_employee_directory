const {Schema, model} = require('mongoose')

module.exports = model('employee', new Schema({
  first_name: String,
  last_name: String,
  department: String,
  title: String
}))