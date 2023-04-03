
//Este codigo es una version 2.0 del anterior, agregando Arrays para que el usuario no pueda ingresar un color no valido dentro de los preestablecidos, y ademas agregue una funcion para que el usuario pueda ingresar un nuevo color y prenda para la proxima vez. Y esto se guarda en un console

/*let usuario = "usuario";
let contrasena = "admin";
const coloresPermitidos = ["rojo", "negro", "gris", "verde", "blanco", "Rojo", "Negro", "Gris", "Verde", "Blanco"];
const tamañosPermitidos = ["XXL", "XL", "L", "M", "S","xxl", "xl", "l", "m", "s"];
let intentos = 1;

function validarUsuario() {
  let usuarioIngresado = prompt("Ingresa tu usuario:");
  let contrasenaIngresada = prompt("Ingresa tu contraseña:");

  while (intentos < 3) {
    if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
      mostrarBienvenida();
      seleccionarRopa();
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
  let color = prompt(
    "¿Qué color quiere para su remera? (Indique colocando el nombre del color) \n rojo \n negro \n gris \n verde \n blanco ");
  while (!coloresPermitidos.includes(color) || typeof color !== "string") {
    color = prompt(
      "El color ingresado no es válido. Por favor, seleccione un color de la lista: (Indique colocando el nombre del color)  \n rojo \n negro \n gris \n verde \n blanco"
    );
  }
  let tamaños = prompt (
    "¿Y que tamaño lo quiere? (Indique colocando el valor) \n XXL \n XL \n L \n M \n S");
  while (!tamañosPermitidos.includes(tamaños) || typeof tamaños !== "string") {
    tamaños = prompt(
      "El tamaño ingresado no es válido. Por favor, seleccione un tamaño de la lista: (Indique colocando el nombre del color) \n XXL \n XL \n L \n M \n S"
    );
  }
  alert("Seleccionaste " + color + " " + tamaños + ", perfecto!");
  agregarNuevaRopa();
}

function agregarNuevaRopa() {
  let agregarRopa = confirm("¿Te gustaría agregar un color de ropa para la próxima vez?");
  if (agregarRopa) {
    let nuevoColor = prompt("¿Qué color de ropa te gustaría que añadiéramos la próxima vez?");
    if (typeof nuevoColor === "string" && nuevoColor !== "") {
      coloresPermitidos.push(nuevoColor);
      alert("¡Gracias por tu sugerencia!");
    } else {
      alert("El color ingresado no es válido. No se ha agregado a la lista.");
    }
  }
}

function mostrarBienvenida() {
  alert("¡Bienvenido " + usuario + "!");
}

function mostrarDespedida() {
  alert("Adios usuario, que tengas un buen día!");
}

validarUsuario(); */

let usuario = "usuario";
let contrasena = "admin";
const coloresPermitidos = ["rojo", "negro", "gris", "verde", "blanco","Rojo", "Negro", "Gris", "Verde", "Blanco"];
const tamañosPermitidos = ["XXL", "XL", "L", "M", "S","xxl", "xl", "l", "m", "s"];
const ropaPermitida = ["Pantalon", "pantalon", "Buzo", "buzo", "Chaleco", "chaleco"]
let intentos = 1;
let nuevaRopa = [];
let ropaElegida = []

function validarUsuario() {
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
  let ropa = prompt(
    "¿Qué color quiere para su remera? (Indique colocando el nombre del color) \n Pantalon \n Buzo \n Chaleco");
    while (!ropaPermitida.includes(ropa) || typeof ropa !== "string") {
      color = prompt(
        "La ropa ingresada no es valida. Por favor, seleccione una ropa de la lista: (Indique colocando el nombre de la ropa) \n Pantalon \n Buzo \n Chaleco"
      );
  
    }
  let color = prompt(
    "¿Qué color quiere para su remera? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco ");
    while (!coloresPermitidos.includes(color) || typeof color !== "string") {
      color = prompt(
        "El color ingresado no es válido. Por favor, seleccione un color de la lista: (Indique colocando el nombre del color)  \n Rojo \n Negro \n Gris \n Verde \n Blanco"
      );
  
    }
  let tamaños = prompt (
    "¿Y que tamaño lo quiere? (Indique colocando el valor) \n XXL \n XL \n L \n M \n S");
    while (!tamañosPermitidos.includes(tamaños) || typeof tamaños !== "string") {
      tamaños = prompt(
        "El tamaño ingresado no es válido. Por favor, seleccione un tamaño de la lista: (Indique colocando el nombre del color) \n XXL \n XL \n L \n M \n S"
      );
    }
  alert("Seleccionaste " + ropa + " " + color + " " + tamaños + ", perfecto!");
  ropaElegida.push(ropa,color,tamaños);
  console.log ("La ropa elegida es:", ropaElegida)
}

function mostrarBienvenida() {
  alert("¡Bienvenido " + usuario + "!");
}

function mostrarDespedida() {
  alert("Adios usuario, que tengas un buen día!");
}

function mostrarNuevaRopa() {
  let mensaje1 = "¿Qué color de ropa te gustaría que añadiéramos la próxima vez?";
  let nuevoItem = prompt(mensaje1);
  let mensaje2 = "¿y de qué color?";
  let nuevoColor = prompt(mensaje2);
  nuevaRopa.push(nuevoItem, nuevoColor);
  alert("Muchas gracias por su sugerencia");
  console.log("La nueva ropa es:", nuevaRopa);
}


validarUsuario();


