const connectToMongo = require('./db.js');

connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


//Available routes

app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello Art')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
