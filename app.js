const express = require('express')
const app = express()
const PORT = 5000

const customMiddleware = (req, res, next) => {
  console.log("Middleware executed!!")
  next()
}

// app.use(customMiddleware)

app.get('/', (req, res) => {
  console.log("Home of hello world")
  res.send("hello world")
})

app.get('/about', customMiddleware, (req, res) => {
  console.log("You are in about")
  res.send("About page")
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})
