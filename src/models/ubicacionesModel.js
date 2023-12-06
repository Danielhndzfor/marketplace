const { connectToMysql } = require('../dbconnection');

class ubicaciones_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("UbicacionesVendedores");
        return await query;
    }
}

module.exports=ubicaciones_Model;