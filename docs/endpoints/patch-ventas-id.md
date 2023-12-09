# EndPoint: `PATCH /ventas/{id}`

Permite ingresar nuevos datos a una venta existente.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de la venta que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /ventas/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "IDVendedor": 2,
    "IDComprador": 3,
    "ProductoID": 2,
    "FechaVenta": "2023-01-02T00:00:00.000Z",
    "MontoVenta": "29.99"
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