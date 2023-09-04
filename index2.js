// Import necessary packages
const express = require('express')
const mongoose = require('mongoose')

// Create an instance of the Express app
const app = express()

// Define the port for your server to listen on
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace [uri] with your actual mongodb uri)
mongoose.connect('mongodb+srv://harshilchandratre:56vu6equj57a@cluster0.fuitgez.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Store the mongodb connection in a variable
const db = mongoose.connection

// Handle mongodb connection errors 
db.on('error', console.error.bind(console, 'MongoDB Connection Error :('))

db.once('open', () => {
    console.log("Yey! Connected to Mongo!")
})

// Set up a basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})