// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigoIngresado = "";
let nombreAmigoSorteado = "";
let listaAmigosIngresada = [];
const ListaAmigosMuestaHTML = document.getElementById("listaAmigos");
const ganadorSorteoHTML = document.getElementById("resultado");
const ListaContenidoLI = ListaAmigosMuestaHTML.getElementsByTagName("li");
let cantidadAmigos = 0;
let randomSorteo = 0;
let contadorUL =0;

function agregarAmigo(){
    
    // agregamos el nombre ingresado en pantalla a la variable NombreAmigoIngresado
    nombreAmigoIngresado = document.getElementById("amigo").value;
    
    
    // validamos se haya ingresado nombre, sino mandamo alerta de ingreso.
    if(nombreAmigoIngresado == ""){

        alert("Debe de ingresar un nombre válido");

    }else{
        // Ingresamos a la lista de amigos ingresados el nuevo valor
        listaAmigosIngresada.push(nombreAmigoIngresado);

        // Dejamos el campo de texto vacio para poder ingresar otro nombre
        document.getElementById("amigo").value = "";

        // Se crea la etiqueta "LI" para agregarla al "UL"
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = listaAmigosIngresada[listaAmigosIngresada.length-1];
        ListaAmigosMuestaHTML.appendChild(nuevoItem);
  
    }

}

function sortearAmigo(){    
    
    // Validamos la cantidad de amigos que hemos ingresado en el array
    cantidadAmigos = listaAmigosIngresada.length;
    // Realizamos un sorteo entre todos los nombres que ingresamos en base a ubicación
    randomSorteo = Math.floor(Math.random()*cantidadAmigos);

    // creamos la etiqueta "LI" para agregarla al "UL" del ganador
    const ganador = document.createElement("li");
    // Asignamos el valor del ganador en la etiqueta y lo cargamos al UL
    ganador.textContent = `El ganador del sorteo es: ${listaAmigosIngresada[randomSorteo]}`;
    ganadorSorteoHTML.appendChild(ganador);

    //Limpiamos el "UL" de los ingresos que hemos tenido.
    limpiarUL();
}

function limpiarUL(){
    // Iniciamos el contador de nuestro while
    contadorUL=0;
    while(contadorUL < listaAmigosIngresada.length){
        // Removemos cada LI del UL de ingresos para que no se muestre en pantalla
        ListaAmigosMuestaHTML.remove(contadorUL);
        contadorUL++;
    }
}