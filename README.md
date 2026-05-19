# ruta-del-sabor-backend
El backend fue desarrollado para administrar información de restaurantes y platos mediante una API REST.
Su función principal es permitir que otras aplicaciones, como un frontend en Angular, puedan solicitar datos desde una base de datos MySQL.

Gracias al backend es posible:

obtener restaurantes
consultar restaurantes por ID
visualizar platos asociados
entregar información en formato JSON

Se utilizó una estructura modular para mantener el proyecto organizado y facilitar el mantenimiento del código.

La separación en carpetas permite dividir responsabilidades:

controllers/ → contiene la lógica del sistema
routes/ → administra las rutas de la API
database/ → configura la conexión con MySQL
index.js → inicia el servidor

Esta estructura facilita:

reutilizar código
encontrar errores más fácilmente
agregar nuevas funciones al proyecto
trabajar de forma más ordenada y profesional

El backend funciona utilizando Node.js y Express.

El usuario realiza una solicitud mediante una ruta API.
La ruta recibe la petición y la envía al controlador correspondiente.
El controlador ejecuta una consulta SQL en MySQL.
MySQL devuelve los datos.
El backend responde en formato JSON
