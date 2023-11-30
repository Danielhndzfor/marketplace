const db= require('../dbconnection');

class calificaciones_Model{
    static async consultar(){
        let query =db("CalificacionesResenas");
        return await query;
    }
}

module.exports=calificaciones_Model;