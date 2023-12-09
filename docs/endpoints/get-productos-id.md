# EndPoint: `GET /productos/{id}`

Permite obtener informacion detallada sobre un producto especifica mediante su identificador unico

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de un producto que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /productos/1
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "ProductoID": 1,
    "NombreProducto": "Producto1",
    "Descripcion": "Descripción del Producto 1",
    "Precio": "19.99",
    "IDVendedor": 1,
    "UbicacionProducto": "Ubicacion1",
    "CalificacionProducto": "4.50"
}
```

## Respuestas de Errores Posibles
- Codigos 404 Not Found:

    ```json
    {
        "errno": 404,
        "error": "Not Found"
    }
    ```

## Notas Adicionales
- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un producto en específico.