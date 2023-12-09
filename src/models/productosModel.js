const { connectToMysql } = require('../dbconnection');

class productos_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query = db("Productos");
        return await query;
    }

    static async consultarPorId(id){
        let db = await connectToMysql();
        return await db("Productos").where("ProductoID",id);
    }

    static async insertar(producto){
        let db = await connectToMysql();
        let result = await db("Productos").insert(producto);
        return result[0];
    }

    static async actualizar(id,producto){
        let db = await connectToMysql();
        return await db("Productos").where("ProductoID",id).update(producto);
    }

    static async reemplazar(id,nuevoproducto){
        let db = await connectToMysql();
        nuevoproducto["ProductoID"]=id;
        await db("Productos").where("ProductoID",id).del();
        await db.insert(nuevoproducto).into("Productos");
        return id;
    }
}

module.exports=productos_Model;