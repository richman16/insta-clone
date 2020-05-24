const express = require('express')
const app = express()
const PORT = 8080

const requestIp = require('request-ip')


var views=0

const customMiddleware = (req, res, next) => {
  const clientIp = requestIp.getClientIp(req)
  console.log("Middleware executed!!")
  console.log(`You are connect from: ${clientIp}`)
  views++
  console.log(`Contador: ${views}`)
  next()
}

app.use(customMiddleware)

app.get('/', (req, res) => {
  console.log("Home of hello world")
  res.send(
    `<h1>hello world - made with nodejs by PolarDEV with <3</h1>
    <br>
    <p>Hola mi buen Yisus</p>
    <p>Contador: ${views}</p>`
  )
})

// app.get('/about', customMiddleware, (req, res) => {
app.get('/about', (req, res) => {
  console.log("You are in about")
  res.send("About page")
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})
