# EndPoint: `POST /calificaciones`

Permite realizar una publicacion de califacion en la base de datos.

## Ejemplo de Solicitud
```http
POST /calificaciones
```

```json
{
    "IDUsuarioCalifica": 1,
    "ProductoID": 1,
    "Calificacion": "4.5",
    "Comentario": "Buena experiencia con el producto"
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