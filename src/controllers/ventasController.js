const ventas_Model = require('../models/ventasModel');

class ventas_Controller{
    static async indexGet(req,res){
        let data =await ventas_Model.consultar();
        res.send(data);
    }

    static async indexPost(req,res){
        try{
            const nuevaventa = req.body;

            const insertedId = await ventas_Model.insertar(nuevaventa); 

            res.status(201)
                .header('Location', '/ventas/${insertedId}')
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({errno: 400, error: 'Bad Request'});
        }
    }

    static async itemGet(req,res){
        let id = req.params.id;
        let data = await ventas_Model.consultarPorId(id);
        if (data.length == 0){
            res.status(404).send({errno: 404, error: 'Not Found'});
            return;
        }
        res.send(data[0]);
    }

    static async itemPut(req,res){
        try{
            const id = req.params.id;
            const updateData = req.body

            const result = await ventas_Model.reemplazar(id,updateData);

            if (result === 0){
                res.status(404).send({errno: 404, error: 'Not Found'});
            } else {
                res.send({message: 'Updated'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({errno: 400, error: 'Bad Request'});
        }
    }

    static async itemPatch(req,res){
        try{
            const id = req.params.id;
            const updatedFields = req.body

            const result = await ventas_Model.actualizar(id,updatedFields);

            if (result === 0){
                res.status(404).send({errno: 404, error: 'Not Found'});
            } else {
                res.send({message: 'Updated'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({errno: 400, error: 'Bad Request'});
        }
    }
}

module.exports=ventas_Controller;