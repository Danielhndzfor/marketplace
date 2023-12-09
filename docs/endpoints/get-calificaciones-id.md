# EndPoint: `GET /calificaciones/{id}`

Permite obtener informacion detallada sobre una calificacion especifica mediante su identificador unico

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de una calificacion que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /calificaciones/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "CalificacionID": 2,
    "IDUsuarioCalifica": 2,
    "ProductoID": 2,
    "Calificacion": "3.8",
    "Comentario": "Producto cumplió con las expectativas"
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
  sobre una calificacion en específico.