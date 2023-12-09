# EndPoint: `GET /ubicaciones/{id}`

Permite obtener informacion detallada sobre una ubicacion especifica mediante su identificador unico

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de una ubicacion que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /ubicacion/3
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "UbicacionID": 3,
    "IDVendedor": 3,
    "Edificio": "Edificio3",
    "Aula": "Aula303"
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
  sobre una ubicacion en específico.