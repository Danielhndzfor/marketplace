const calificaciones_Model = require('../models/calificacionesModel');

class calificaciones_Controller{
    static async indexGet(req,res){
        let data =await calificaciones_Model.consultar();
        res.send(data);
        }
}

module.exports=calificaciones_Controller;