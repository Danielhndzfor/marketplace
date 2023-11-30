const db= require('../dbconnection');

class ubicaciones_Model{
    static async consultar(){
        let query =db("UbicacionesVendedores");
        return await query;
    }
}

module.exports=ubicaciones_Model;