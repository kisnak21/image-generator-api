const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes/api')

const port = process.env.PORT || 4000;

// enable cors
app.use(cors())

// parsing app/json
app.use(express.json())
// parsing app/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

app.use('/openai', routes)

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

