# EndPoint: `PATCH /ubicaciones/{id}`

Permite ingresar nuevos datos a una ubicacion existente.

## Parametros de URL
- `{id}` (obligatorio): Identificador unico de la ubicacion que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /ubicaciones/2
```

## Respuesta Exitosa (Codigo 200 OK)
```json
{
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
- Asegurate de incluir un ID válido en la solicitud para poder asignar los nuevos datos.