import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { postgraphile } from './postgraphile'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
