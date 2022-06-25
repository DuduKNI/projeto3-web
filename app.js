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
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('Conectado ao banco')
)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000)
