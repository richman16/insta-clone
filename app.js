const express = require('express')
const app = express()
const PORT = 5000

const customMiddleware = (req, res, next) => {
  console.log("Middleware executed!!")
  next()
}

app.use(customMiddleware)

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})
