const express = require('express')
require('dotenv').config();
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const port = process.env.PORT || 5000

const app = express()

// Connect To Database
connectDB();

app.use(cors())

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    })
);


app.listen(port, console.log(`server is running on ${port}`))