import routes from '@routes'
import { port } from '@variables'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

// mounting routes (controllers)
routes.forEach(r => {
  app.use('/api' + r.path, r.controller)
})

// app running
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})