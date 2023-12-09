const { connectToMysql } = require('../dbconnection');

class calificaciones_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("CalificacionesResenas");
        return await query;
    }

    static async consultarPorId(id){
        let db = await connectToMysql();
        return await db("CalificacionesResenas").where("CalificacionID",id);
    }

    static async insertar(calificacion){
        let db = await connectToMysql();
        let result = await db("CalificacionesResenas").insert(calificacion);
        return result[0];
    }

    static async actualizar(id,calificacion){
        let db = await connectToMysql();
        return await db("CalificacionesResenas").where("CalificacionID",id).update(calificacion);
    }

    static async reemplazar(id,nuevacalificacion){
        let db = await connectToMysql();
        nuevacalificacion["CalificacionID"]=id;
        await db("CalificacionesResenas").where("CalificacionID",id).del();
        await db.insert(nuevacalificacion).into("CalificacionesResenas");
        return id;
    }
}

module.exports=calificaciones_Model;