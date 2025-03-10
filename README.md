# desafio-cgr
Challenge amigo secreto para Alura Oracle One - Grupo 8 -Desafío en proceso de desarrollo por 
### Catalina Gimeno Rodillo



# Sorteo de Amigo Secreto
Es un proyecto web sencillo que busca sortear 1 ganador dentro de un grupo de amigos. Permite sortear una mínimo y máximo de amigos, con nombres que no se pueden repetir. Los nombres no pueden ser ni contener números.

## Características

* ***Agregar Amigos***: Ingresa los nombres de tus amigos para incluirlos en el sorteo, puedes escribir nombres a partir de 1 letra.
* ***Validación de Nombres***: Asegura que los nombres sean válidos (letras) y únicos (no se puden repetir).
* ***Sorteo Aleatorio***: Elige un ganador al azar entre los amigos ingresados.
* ***Visualización de la Lista***: Muestra la lista de amigos participantes a medida que se van ingresando.
* ***Reinicio del Sorteo***: Permite reiniciar el sorteo para una nueva ronda, ya sea al finalizar el sorteo o en cualquier momento del juego.
* ***Mensajes de alerta***: Aparece un mensaje de alerta cuando hay algo que no está permitido: *campo de nombre vacio, campo de nombre con números, necesitas un minimo de amgios, tienes un maximo de amigos.*
* ***Entrada por Teclado***: Se pueden agregar nombres presionando la tecla Enter.


## Cómo Usar

1.  Abre el archivo `index.html` en tu navegador web.
2.  Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Agregar Amigo" (o presiona Enter).
3.  Repite el paso 2 hasta que tengas al menos 3 amigos (y hasta 10).
4.  Haz clic en "Sortear Amigo" para elegir un ganador aleatorio.
5.  Haz clic en "Volver a Empezar" para reiniciar el sorteo.

## Estructura del Proyecto

* `index.html`: Contiene la estructura HTML de la aplicación.
* `styles.css`: Define los estilos CSS para la aplicación.
* `app.js`: Contiene la lógica JavaScript de la aplicación.

## Personalización

* Puedes modificar los estilos en `styles.css` para cambiar la apariencia de la aplicación.
* Puedes ajustar los límites de amigos (mínimo y máximo) en las constantes `minimoAmigos` y `maximoAmigos` en `app.js`.
* Puedes agregar más validaciones o funcionalidades en app.js.

## Mejoras Futuras

* Agregar la opción de enviar el resultado del sorteo por correo electrónico.
* Implementar una interfaz más atractiva y responsiva.
* Permitir la eliminación de nombres de la lista de amigos.
* Usar almacenamiento local (localStorage) para guardar la lista de amigos entre sesiones.
* Agregar animación o efectos visuales para el ganador.

## Contribución

Siéntete libre de contribuir a este proyecto. Puedes abrir un "issue" para reportar errores o sugerir mejoras, o enviar un "pull request" con tus cambios.

## Licencia

Este proyecto está bajo la licencia [MIT](aquí\_va\_el\_link\_de\_la\_licencia).

