const { connectToMysql } = require('../dbconnection');

class usuarios_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("Usuarios");
        return await query;
    }

    static async consultarPorId(id){
        let db = await connectToMysql();
        return await db("Usuarios").where("UsuarioID",id);
    }

    static async insertar(usuario){
        let db = await connectToMysql();
        let result = await db("Usuarios").insert(usuario);
        return result[0];
    }

    static async actualizar(id,usuario){
        let db = await connectToMysql();
        return await db("Usuarios").where("UsuarioID",id).update(usuario);
    }

    static async reemplazar(id,nuevousuario){
        let db = await connectToMysql();
        nuevousuario["UsuarioID"]=id;
        await db("Usuarios").where("UsuarioID",id).del();
        await db.insert(nuevousuario).into("Usuarios");
        return id;
    }
}

module.exports=usuarios_Model;