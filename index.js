const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./src/route/pessoaRoute'))

app.listen(3000)