const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const propertyRoutes = require('./routes/property-routes');


const mongoString = process.env.DATABASE_URL

const app = express();
app.use(express.json())

// Routes for the properties
app.use('/api/properties', propertyRoutes);

// Connect to the database
mongoose.connect(mongoString);

// Get the database connection
const database = mongoose.connection

// Check for database connection errors
database.on('error', (error) => {
    console.log(error)
})

// Check for database connection success
database.once('connected', () => {
    console.log('Database Connected');
})


app.use(express.json());

// Start the server
app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})
