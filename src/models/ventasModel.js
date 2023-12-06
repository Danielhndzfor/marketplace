const { connectToMysql } = require('../dbconnection');

class ventas_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("Ventas");
        return await query;
    }
}

module.exports=ventas_Model;