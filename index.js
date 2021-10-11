const express = require("express");
const { engine } = require("express/lib/application");
const pdfkit = require('pdfkit')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.get('/', (req, res) => {
    
    res.download('pdf/prueba.pdf')
}

)

app.listen(app.get('port'), () => {
    console.log('Servidor preparado')
})