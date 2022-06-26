const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
require('dotenv/config')

const postsRoute = require('./routes/posts')

// app.use(bodyParser.json())

// app.use('/posts', postsRoute)

// //ROTAS
// router.get('/', (req, res) => {
//   res.send('We are on home')
// })

//Conexão Banco de Dados
const url =
  'mongodb+srv://projeto3:projeto3@cluster0.a6kvmij.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Conectado ao banco')
)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on ${process.env.PORT || 5000}`)
)

module.exports = mongoose
