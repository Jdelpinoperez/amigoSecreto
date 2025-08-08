# PROYECTO WEB: AMIGO SECRETO
Este desarrollo cuenta con la funcionalidad de poder ingresar nombres de personas para poder elegir aleatoriamente el nombre de una de las ingresadas, así conocer cual es tu amigo secreto.
  
  # Partes visuales fijas:
    Caja de texto: Sirve para poder ingresar uno a uno los nombres de los amigos que vayamos colocando
    Botón Añadir: Cuenta con la funcionalidad de poder agregar cada nombre de los amigos ingresados
    Botón Sortear amigo: Nos elige de manera aleatoria a uno de los amigos que se ingrearon.
  # Partes visuales dinámicas:
    UL de lista de amigos: Es una etiqueta donde se irá almacenando y visualizando los amigos que se han ingresado en tiempo real liego de dar click al botón "Añadir"
    UL de ganador: Es una etiqueta que se mostrará al amigo secreto elegido de manera aleatoria en color verde y solo aparecerá al momento de darle click al botón "Sortear Amigo"
  # Funciones codificadas:
    agregarAmigo() : contiene una validación para segurarnos que en el campo texto se haya ingresado un nombre válido e ingresa en el arreglo de lista LI los valores que vamos cañadiendo.
    <img width="544" height="374" alt="image" src="https://github.com/user-attachments/assets/56a85002-5884-459c-9f43-43285fc58a94" />

    sortearAmigo() : nos elige de manera aleatoria uno de los nombres ingresados y nos lo devuelve dentro de una etiqueta LI.
    <img width="545" height="233" alt="image" src="https://github.com/user-attachments/assets/20a66baa-4f02-4f1b-aa94-94832b8d058c" />

    LimpiarUL() : nos limpia los LI ingreados en el UL de lista de amigos para que no se muestre al momento de lanzar al ganador.
    <img width="503" height="131" alt="image" src="https://github.com/user-attachments/assets/1f34e283-132b-4479-b4f2-3c2f48f97344" />
  # Consideraciones generales:
    El proyecto cuenta con un límite de validación de recorrido, lo cual no entra en bucles infinitos
    El proyecto no cuenta con un botón de reseteo, por lo que deberá de actualizarse la página cuando se quiera reiniciar la lista de amigos ingresadas.
  # Despligue:
    El proyecto se encuentra alojado en un entorno web, lo que su disponibilidad está apta para cualquier dispositivo con conexión a internet con acceso a navegador por medio del link creado.
  # Versión:
    Se realizaron dos actualizaciones en entorno Ompremise y concluyendo una versión final en cloud por medio de GitHub.
    Inicio de desarrollo fue el 05-06-2025 y versión final cargada el 08-08-2025
    Se desarrollo en Visual Studio Code.
  # Autores:
    Desarrollador: Jhon Alexander Del Pino Perez
