const express= require('express')
const express= require('express')
const cors = require('cors')
const path=  require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('../public'))
