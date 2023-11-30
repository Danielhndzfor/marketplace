const { connectToMysql } = require('../dbconnection');

class usuarios_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("Usuarios");
        return await query;
    }
}

module.exports=usuarios_Model;