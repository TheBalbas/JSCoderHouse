
//Este codigo es una version 2.0 del anterior, agregando Arrays y Objetos para que el usuario no pueda ingresar un color no valido dentro de los preestablecidos, y ademas agregue una funcion para que el usuario pueda ingresar un nuevo color y prenda para la proxima vez. Y esto se guarda en un console






let usuario = "usuario";
let contrasena = "admin"; 
const coloresPermitidos = {
  colores: ["rojo", "negro", "gris", "verde", "blanco","Rojo", "Negro", "Gris", "Verde", "Blanco"]
  };
const tamañosPermitidos = {
  tamaños: ["XXL", "XL", "L", "M", "S","xxl", "xl", "l", "m", "s"]
  };
const ropaPermitida = {
  prendas: ["Pantalon", "pantalon", "Buzo", "buzo", "Chaleco", "chaleco"]
  };
  


function validarUsuario() {
  let intentos = 1;
  let usuarioIngresado = prompt("Ingresa tu usuario:");
  let contrasenaIngresada = prompt("Ingresa tu contraseña:");

  while (intentos < 3) {
    if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
      mostrarBienvenida();
      seleccionarRopa();
      mostrarNuevaRopa();
      mostrarDespedida();
      return;
    } else {
      alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3");
      intentos++;
      usuarioIngresado = prompt("Ingresa tu usuario:");
      contrasenaIngresada = prompt("Ingresa tu contraseña:");
    }
  }
  alert("Has excedido el número de intentos permitidos");
} 
function seleccionarRopa() {
  let ropaElegida = { prenda: "", color: "", tamaño: "" }; 

  let ropa = prompt(
    "¿Qué ropa quiere? (Indique colocando el nombre de la prenda) \n Pantalon \n Buzo \n Chaleco");
     ropaElegida.prenda = ropa;
    while (!ropaPermitida.prendas.includes(ropa) || typeof ropa !== "string") {
      ropa = prompt(
        "La ropa ingresada no es valida. Por favor, seleccione una prenda de la lista: (Indique colocando el nombre de la prenda) \n Pantalon \n Buzo \n Chaleco"
      );
    }
  let color = prompt(
    "¿Qué color quiere para su ropa? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco ");
    ropaElegida.color = color;
    while (!coloresPermitidos.colores.includes(color) || typeof color !== "string") {
      color = prompt(
        "El color ingresado no es válido. Por favor, seleccione un color de la lista: (Indique colocando el nombre del color)  \n Rojo \n Negro \n Gris \n Verde \n Blanco"
      );
    }
  let tamaños = prompt (
    "¿Y que tamaño lo quiere? (Indique colocando el valor) \n XXL \n XL \n L \n M \n S");
    ropaElegida.tamaño = tamaños;
    while (!tamañosPermitidos.tamaños.includes(tamaños) || typeof tamaños !== "string") {
      tamaños = prompt(
        "El tamaño ingresado no es válido. Por favor, seleccione un tamaño de la lista: (Indique colocando el valor) \n XXL \n XL \n L \n M \n S"
      );
    }
  alert("Seleccionaste " + ropa + " " + color + " " + tamaños + ", perfecto!");
  console.log ("La ropa elegida es:", ropaElegida)
}

function mostrarBienvenida() {
  alert("¡Bienvenido " + usuario + "!");;
}

function mostrarDespedida() {
  alert("Adios usuario, que tengas un buen día!");
}

function mostrarNuevaRopa() {
  let nuevaRopa = {
    items: [],
    colores: []
  };
      
  let mensaje1 = "¿Qué prenda te gustaría que añadiéramos la próxima vez?";
  let nuevoItem = prompt(mensaje1);
  
  while (typeof nuevoItem !== "string" || nuevoItem.trim() === "") { 
    nuevoItem = prompt(
      "La ropa ingresada no es válida. Por favor, vuelva a ingresar una prenda de ropa:"
    );
  }
  
  let mensaje2 = "¿Y de qué color?";
  let nuevoColor = prompt(mensaje2);
  
  while (typeof nuevoColor !== "string" || nuevoColor.trim() === "") { 
    nuevoColor = prompt(
       "El color ingresado no es válido. Por favor, vuelva a ingresar un color:"
     );
  }
  
  nuevaRopa.items.push(nuevoItem);
  nuevaRopa.colores.push(nuevoColor);
  

  alert("Muchas gracias por su sugerencia");
  console.log("La nueva ropa es:", nuevaRopa);
}



validarUsuario();

