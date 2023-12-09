# EndPoint: `POST /ventas`

Permite realizar una publicacion de venta en la base de datos.

## Ejemplo de Solicitud
```http
POST /ventas
```

```json
{
    "IDVendedor": 2,
    "IDComprador": 3,
    "ProductoID": 2,
    "FechaVenta": "2023-02-01",
    "MontoVenta": "45.50"
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