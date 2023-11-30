const db= require('../dbconnection');

class usuarios_Model{
    static async consultar(){
        let query =db("Usuarios");
        return await query;
    }
}

module.exports=usuarios_Model;