# EndPoint: `PATCH /productos/{id}`

Permite ingresar nuevos datos a un producto existente.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico del producto que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH/productos/2
```

## Respuesta Exitosa (Codigo 200 OK)
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

## Respuestas de Errores Posibles
- Codigos 404 Not Found:

    ```json
    {
        "errno": 404,
        "error": "Not Found"
    }
    ```

## Notas Adicionales
- Asegurate de incluir un ID válido en la solicitud para poder asignar los nuevos datos.