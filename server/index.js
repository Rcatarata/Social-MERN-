const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.Port || 3003;
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('api/talks', require('./routes/talkRoutes'))
app.use('api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})


