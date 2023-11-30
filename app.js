const express = require('express');
const app = express();
const port = 80;

const usuarios_Controller=require('./controllers/usuariosController');
app.use(express.json())
app.get('/usuarios',usuarios_Controller.indexGet);
app.get('/usuarios/:id', usuarios_Controller.getMenuById);


app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Holaaaa Mundo');
});

app.listen(port, '0.0.0.0', function() {
    console.log(`Server running at port ${port}`);
});
