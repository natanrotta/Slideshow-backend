require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Conexão com nossa base de dados.
mongoose.connect('mongodb+srv://natan:1Lazzeri@@cluster0-aloxh.mongodb.net/saulo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Libera para todos os domínios.
app.use(cors());

//Prepara para interpretar JSON.
app.use(express.json());
app.use(express.urlencoded({extends: true}));

//Nosso controlador de LOG - Formato DEV.
app.use(morgan('dev'))

app.use(require("./routes"));

app.listen(3333);