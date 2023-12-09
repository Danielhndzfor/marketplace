# API RESTful con Node.js

Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js con implementación en contenedores de Docker.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Comandos de Docker](#comandos-de-docker)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/Danielhndzfor/marketplace.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd Marketplace 2.0
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)



# Comandos de Docker

Comando para construir la imagen desde dockerfile
```sh
docker build -t demo-httpd:l14 .
```

Ejecutar la imagen construida:
```sh
docker run -p 3000:80 demo-httpd:l14
```

#Usar el docker-compose

Para utilizar el docker-compose se utiliza un archivo denominado
`docker-compose.yml`

Para dar de alta o instalar los servicios definidos en el docker-compose se debe ejecutar el siguiente comando

```sh
docker-compose up -d
```

Para detener los servicios se deben ejecutar los siguientes servicios
```sh
docker-compose stop
```

Para volver a encender los servicios se debe ejecutar lo siguiente:
```sh
docker-compose start
```

Para desinstalar los servicios del contenedor se debe ejecutar lo siguiente:
```sh
docker-compose down
```

Si se necesita reconstruir la imagen de los servicios con docker-compose, se utiliza el siguiente comando
```sh
docker-compose up -d -build
```

Para ver que contenedores se estan ejecutando es con
```sh
docker ps
```