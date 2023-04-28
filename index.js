require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection }  = require('./database/config');

// Crea el servidor de express 
const app = express();

// Configurar CORS
app.use(cors());

// BD
dbConnection();

// Rutas
app.get('/', (req, res)=> {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(process.env.PORT, _=>{
    console.log('Servidor corriendo en el puerto' + 3000);
})