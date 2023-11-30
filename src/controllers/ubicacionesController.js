const ubicaciones_Model = require('../models/ubicacionesModel');

class ubicaciones_Controller{
    static async indexGet(req,res){
        let data =await ubicaciones_Model.consultar();
        res.send(data);
        }
}

module.exports=ubicaciones_Controller;