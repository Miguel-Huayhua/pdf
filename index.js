const express = require("express");
const { engine } = require("express/lib/application");
const pdfkit = require('pdfkit')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.get('/', (req, res) => {
    let pdf = new pdfkit
    pdf.pipe(fs.createWriteStream('prueba.pdf'))
    pdf.text("hola a todos")
    pdf.end()
    res.download('prueba.pdf')
}

)

app.listen(app.get('port'), () => {
    console.log('Servidor preparado')
})