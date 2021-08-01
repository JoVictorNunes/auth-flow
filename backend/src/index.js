const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

const routes = require('./routes')

app.use(cors())
app.use(routes)

app.listen(port, () => { console.log(`App running on port ${port}`) })
