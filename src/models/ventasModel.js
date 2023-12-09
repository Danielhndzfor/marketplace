const { connectToMysql } = require('../dbconnection');

class ventas_Model{
    static async consultar(){
        let db = await connectToMysql();
        let query =db("Ventas");
        return await query;
    }

    static async consultarPorId(id){
        let db = await connectToMysql();
        return await db("Ventas").where("VentaID",id);
    }

    static async insertar(venta){
        let db = await connectToMysql();
        let result = await db("Ventas").insert(venta);
        return result[0];
    }

    static async actualizar(id,venta){
        let db = await connectToMysql();
        return await db("Ventas").where("VentaID",id).update(venta);
    }

    static async reemplazar(id,nuevaventa){
        let db = await connectToMysql();
        nuevaventa["VentaID"]=id;
        await db("Ventas").where("VentaID",id).del();
        await db.insert(nuevaventa).into("Ventas");
        return id;
    }
}

module.exports=ventas_Model;