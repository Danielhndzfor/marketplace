# EndPoint: `PATCH /usuario/{id}`

Permite ingresar nuevos datos a un usuario existente.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico del usuario que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /usuario/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "Nombre": "Usuario5",
    "CorreoElectronico": "usuario5@example.com",
    "Contraseña": "password5"
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