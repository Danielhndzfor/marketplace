const ventas_Model = require('../models/ventasModel');

class ventas_Controller{
    static async indexGet(req,res){
        let data =await ventas_Model.consultar();
        res.send(data);
        }
}

module.exports=ventas_Controller;