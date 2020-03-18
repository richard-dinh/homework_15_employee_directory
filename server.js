require('dotenv').config()
const express = require('express')
const {join} = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(join(__dirname, 'public')))


require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch( error => console.error(error))