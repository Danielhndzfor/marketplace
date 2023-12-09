# Endpoint: `GET /usuarios/{id}`

Permite obtener informacion detallada sobre un usuario especifico mediante su identificador unico.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico del usuarios que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
    "UsuarioID": 1,
    "Nombre": "Usuario1",
    "CorreoElectronico": "usuario1@example.com",
    "Contraseña": "password1"
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
  sobre un usuario en específico.
