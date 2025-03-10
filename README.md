# desafio-cgr
Challenge amigo secreto para Alura Oracle One - Grupo 8 -Desafío desarrollado por: 
### Catalina Gimeno Rodillo
___________


# Sorteo de Amigo Secreto
Es un proyecto web sencillo que busca sortear 1 ganador dentro de un grupo de amigos. Permite sortear un mínimo y máximo de amigos, con nombres que no se pueden repetir y tampoco pueden contener números.

## Características
* ***Agregar amigos***: Ingresa los nombres de tus amigos para incluirlos en el sorteo, puedes escribir nombres a partir de 1 letra.
* ***Validación de nombres***: Asegurate que los nombres no contengan números y que no se repitan.
* ***Sorteo aleatorio***: Elige un ganador al azar entre los amigos ingresados.
* ***Visualización de la lista***: Muestra la lista de amigos participantes a medida que se van ingresando.
* ***Reinicio del sorteo***: Permite reiniciar el sorteo para una nueva ronda, ya sea al finalizar el sorteo o en cualquier momento del juego.
* ***Mensajes de alerta***: Aparece un mensaje de alerta cuando hay algo que no está permitido: 
    * campo de nombre vacio: "Debes ingresar un nombre."
    * campo de nombre con números: "El nombre no puede contener números. Por favor, ingresa un nombre válido."
    * campo con un nombre repetido: "Este nombre ya está en la lista. Por favor, ingresa un nombre diferente."
    * necesitas un minimo de amgios: "Necesitas al menos ___ amigos para realizar el sorteo." 
    * tienes un maximo de amigos: "Ya tienes ___ amigos. Estas listo para realizar el sorteo.
* ***Entrada por teclado***: Se pueden agregar nombres presionando la tecla Enter.


## Cómo Usar
1.  Abre el archivo `index.html` en tu navegador web.
2.  Ingresa los nombres de tus amigos en el campo de texto y haz clic en *Agregar Amigo* (o presiona la tecla Enter).
3.  Repite el paso 2 hasta que tengas al menos 3 y hasta 10 amigos _(Puedes modificar el mínimo y maximo en el app.js)_.
4.  Haz clic en *Sortear Amigo* para elegir un ganador aleatorio.
5.  Haz clic en *Volver a Empezar* para reiniciar el sorteo.

## Estructura del Proyecto
* `index.html`: Contiene la estructura HTML de la aplicación.
* `style.css`: Define los estilos CSS para la aplicación.
* `app.js`: Contiene la lógica JavaScript de la aplicación.
*  `assets`: Carpeta que contiene recursos gráficos

## Personalización
* Puedes modificar los estilos en `style.css` para cambiar la apariencia de la aplicación.
* Puedes ajustar los límites de amigos (mínimo y máximo) en las constantes `minimoAmigos` y `maximoAmigos` en `app.js`.
* Puedes agregar más validaciones o funcionalidades en `app.js`.


