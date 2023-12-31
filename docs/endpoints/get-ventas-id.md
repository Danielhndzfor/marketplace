# EndPoint: `GET /ventas/{id}`

Permite obtener informacion detallada sobre una venta especifico mediante su identificador unico

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de la venta que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /ventas/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "VentaID": 2,
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
- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre una venta en específico.