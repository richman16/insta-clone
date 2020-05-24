const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys.js')


// Deprecation Warning - Use new parser for URL String and
// Server Discover and Monitoring engine
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology:true
})
mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
  console.log("Error connecting", err)
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})
