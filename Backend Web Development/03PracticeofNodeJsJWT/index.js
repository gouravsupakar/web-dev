const express = require('express');
const authRouter = require('./routes/auth')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRouter = require('./routes/posts')

dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const uri = process.env.DB_CONNECT;
const clientOptions = {serverApi: {version:'1', strict: true, depricationErrors: true} };

mongoose.connect(uri, clientOptions)
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.error("error connecting to database",error);
})

app.use('/api/user', authRouter);
app.use('/api/posts', postRouter)


app.listen(3000, () => {
    console.log("Server is up and runing");
})


