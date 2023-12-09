# EndPoint: `POST /productos`

Permite realizar una publicacion de producto en la base de datos.

## Ejemplo de Solicitud
```http
POST /productos
```

```json
{
    "NombreProducto": "Producto1",
    "Descripcion": "Descripción del Producto 1",
    "Precio": "19.99",
    "IDVendedor": 1,
    "UbicacionProducto": "Ubicacion1",
    "CalificacionProducto": "4.50"
}
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuesta de Errores Posibles
- Codigos 400 Bad Request:
    ```json
    {
        "errno": 400,
        "error": "Bad Request"
    }
    ```
## Notas Adicionales
- Asegurate de no incluir el id ya que es incrementable y no se necesita que se declare.