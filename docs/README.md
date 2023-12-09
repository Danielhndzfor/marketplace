# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| `GET /usuarios`            | Recupera la lista de todos los usuarios disponibles. |
| [`GET /usuarios/{id}`](./endpoints//get-usuarios-id.md)       | Obtiene informacion detallada sobre un usuario en especifico. 
| [`POST /usuarios`](./endpoints//post-usuarios.md)    | Publica un nuevo usuarios. |
| [`PATCH /usuarios/{id}`](./endpoint//patch-usuarios-id.md)    | Sustituye datos de un usuario en especifico.
| -------------------------- | ----------- |

| `GET /calificaciones`      | Recupera la lista de todas las calificaciones y resenas. |
| [`GET /calificaciones/{id}`](./endpoints//get-calificaciones-id.md)  | Obtiene informacion detallada sobre una calificacion especifica.
| [`POST /calificaciones`](./endpoints//post-calificaciones.md)   | Publica una nueva calificacion.
| [`PATCH /calificaciones/{id}`](./endpoints//patch-calificaciones-id.md)  | Sustituye datos de una calificacion en especifico.
| -------------------------- | ----------- |

| `GET /ubicaciones`         | Recupera la lista de ubicaciones registradas.  |
| [`GET /ubicaciones/{id}`](./endpoints//get-ubicaciones-id.md)  | Obtiene informacion detallada de una ubicacion especifica.
| [`POST /ubicaciones`](./endpoints//post-ubicaciones.md)  | Publica una nueva ubicacion.
| [`PATCH /ubicaciones/{id}`](./endpoints//patch-ubicaciones-id.md)  | Sustituye los datos de una ubicacion en especifico.
| -------------------------- | ----------- |

| `GET /productos`           | Obtiene la lista de productos disponibles.  |
| [`GET /productos/{id}`](./endpoints//get-productos-id.md)  | Obtiene informacion detallada sobre un producto especifico
| [`POST /productos`](./endpoints//post-productos.md)  | Publica un nuevo producto.
| [`PATCH /productos/{id}`](./endpoints//patch-productos-id.md)  | Sustituye los daots de un producto en especifico.
| -------------------------- | ----------- |

| `GET /ventas`              | Recupera la lista de todas las ventas disponibles. |
| [`GET /ventas/{id}`](./endpoints//get-ventas-id.md)  | Obtiene informacion detallada de una venta especifica.
| [`POST /ventas`](./endpoints//post-ventas.md)  | Publica una nueva venta.
| [`PATCH /ventas/{id}`](./endpoints//patch-ventas-id.md)  | Sustituye datos de una venta especifica.