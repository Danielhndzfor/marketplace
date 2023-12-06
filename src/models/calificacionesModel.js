const { connectToMysql } = require('../dbconnection');

class calificaciones_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("CalificacionesResenas");
        return await query;
    }
}

module.exports=calificaciones_Model;