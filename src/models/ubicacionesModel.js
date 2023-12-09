const { connectToMysql } = require('../dbconnection');

class ubicaciones_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("UbicacionesVendedores");
        return await query;
    }

    static async consultarPorId(id){
        let db = await connectToMysql();
        return await db("UbicacionesVendedores").where("UbicacionID",id);
    }

    static async insertar(ubicacion){
        let db = await connectToMysql();
        let result = await db("UbicacionesVendedores").insert(ubicacion);
        return result[0];
    }

    static async actualizar(id,ubicacion){
        let db = await connectToMysql();
        return await db("UbicacionesVendedores").where("UbicacionID",id).update(ubicacion);
    }

    static async reemplazar(id,nuevaubicacion){
        let db = await connectToMysql();
        nuevaubicacion["UbicacionID"]=id;
        await db("UbicacionesVendedores").where("UbicacionID",id).del();
        await db.insert(nuevaubicacion).into("UbicacionesVendedores");
        return id;
    }
}

module.exports=ubicaciones_Model;