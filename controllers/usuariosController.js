const usuarios_Model = require('../models/usuariosModel');

class usuarios_Controller{
    static async indexGet(req,res){
        let data =await usuarios_Model.consultar();
        res.send(data);
        }
}

module.exports=usuarios_Controller;