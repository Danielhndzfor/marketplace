# EndPoint: `POST /ubicaciones`

Permite realizar una publicacion de ubicacion en la base de datos.

## Ejemplo de Solicitud
```http
POST /ubicaciones
```

```json
{
    "IDVendedor": 1,
    "Edificio": "Edificio1",
    "Aula": "Aula101"
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