const { connectToMysql } = require('../dbconnection');

class productos_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query = db("Productos");
        return await query;
    }
}

module.exports=productos_Model;