const db= require('../dbconnection');

class ventas_Model{
    static async consultar(){
        let query =db("Ventas");
        return await query;
    }
}

module.exports=ventas_Model;