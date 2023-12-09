# EndPoint: `PATCH /calificaciones/{id}`

Permite ingresar nuevos datos a una calificacion existente.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de la calificacion que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /calificaciones/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
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
- Asegurate de incluir un ID válido en la solicitud para poder asignar los nuevos datos.