const express = require("express");
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.get('/', (req, res) => {
    
    res.send('holaaa');
}

)

app.listen(app.get('port'), () => {
    console.log('Servidor preparado')
})
