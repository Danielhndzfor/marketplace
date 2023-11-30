const db= require('../dbconnection');

class productos_Model{
    static async consultar(){
        let query =db("Productos");
        return await query;
    }
}

module.exports=productos_Model;