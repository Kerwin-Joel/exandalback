const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Registro = require('./registroModel');
require('dotenv').config({path:'./config.env'})

app.use(bodyParser.json());
app.use(cors());


//generate conenction to DB
const DB = "mongodb+srv://kerwin:1234567890@cluster0.puilz.mongodb.net/exandal?retryWrites=true&w=majority"

try {
    mongoose.connect(DB)
        .then(() => {
            console.log('DB connected 🚀')
        })
} catch (error) {
    console.log(error)
}

app.post('/registro', async(req, res) => {
    
    try {
        const docu = await Registro.create(req.body)
        res.status(201).send({
            status: 'success',
            data: docu
        })
    } catch (error) {
        res.status(400).send({
            status: error,
        })
        
    }
})

app.get('/registro', async(req, res) => {
    try {
        const docu = await Registro.find()
        res.status(200).send({
            status: 'success',
            data: docu
        })
    } catch (error) {
        res.status(400).send({
            status: error,
        })
    }
})
app.get('/', async(req, res) => {
    res.send('Hello World')
})




app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
})
