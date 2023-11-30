const express = require('express');
const app = express();
const port = 80;

const usuarios_Controller=require('./controllers/usuariosController');
app.use(express.json())
app.get('/usuarios',usuarios_Controller.indexGet);

const calificaciones_Controller=require('./controllers/calificacionesController');
app.use(express.json())
app.get('/calificaciones',calificaciones_Controller.indexGet);

const ubicaciones_Controller=require('./controllers/ubicacionesController');
app.use(express.json())
app.get('/ubicaciones',ubicaciones_Controller.indexGet);

const productos_Controller=require('./controllers/productosController');
app.use(express.json())
app.get('/productos',productos_Controller.indexGet);

const ventas_Controller=require('./controllers/ventasController');
app.use(express.json())
app.get('/ventas',ventas_Controller.indexGet);



app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Holaaaa Mundo');
});

app.listen(port, '0.0.0.0', function() {
    console.log(`Server running at port ${port}`);
});
