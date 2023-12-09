const express = require('express');
const app = express();
const port = 80;

const usuarios_Controller=require('./controllers/usuariosController');
app.use(express.json())
app.get('/usuarios',usuarios_Controller.indexGet);
app.get('/usuarios/:id([0-9]+)',usuarios_Controller.itemGet);
app.post('/usuarios',usuarios_Controller.indexPost);
app.put('/usuarios/:id([0-9]+)',usuarios_Controller.itemPut);
app.patch('/usuarios/:id([0-9]+)',usuarios_Controller.itemPatch);


const calificaciones_Controller=require('./controllers/calificacionesController');
app.use(express.json())
app.get('/calificaciones',calificaciones_Controller.indexGet);
app.get('/calificaciones/:id([0-9]+)',calificaciones_Controller.itemGet);
app.post('/calificaciones',calificaciones_Controller.indexPost);
app.put('/calificaciones/:id([0-9]+)',calificaciones_Controller.itemPut);
app.patch('/calificaciones/:id([0-9]+)',calificaciones_Controller.itemPatch);

const ubicaciones_Controller=require('./controllers/ubicacionesController');
app.use(express.json())
app.get('/ubicaciones',ubicaciones_Controller.indexGet);
app.get('/ubicaciones/:id([0-9]+)',ubicaciones_Controller.itemGet);
app.post('/ubicaciones',ubicaciones_Controller.indexPost);
app.put('/ubicaciones/:id([0-9]+)',ubicaciones_Controller.itemPut);
app.patch('/ubicaciones/:id([0-9]+)',ubicaciones_Controller.itemPatch);

const productos_Controller=require('./controllers/productosController');
app.use(express.json())
app.get('/productos',productos_Controller.indexGet);
app.get('/productos/:id([0-9]+)',productos_Controller.itemGet);
app.post('/productos',productos_Controller.indexPost);
app.put('/productos/:id([0-9]+)',productos_Controller.itemPut);
app.patch('/productos/:id([0-9]+)',productos_Controller.itemPatch);

const ventas_Controller=require('./controllers/ventasController');
app.use(express.json())
app.get('/ventas',ventas_Controller.indexGet);
app.get('/ventas/:id([0-9]+)',ventas_Controller.itemGet);
app.post('/ventas',ventas_Controller.indexPost);
app.put('/ventas/:id([0-9]+)',ventas_Controller.itemPut);
app.patch('/ventas/:id([0-9]+)',ventas_Controller.itemPatch);



app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

app.listen(port, '0.0.0.0', function() {
    console.log(`Server running at port ${port}`);
});
