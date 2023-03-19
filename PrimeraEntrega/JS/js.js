/*let usuario = "usuario";
let contrasena = "admin";
let intentos = 1
let accesoPermitido = false;

let usuarioIngresado = prompt("Ingresa tu usuario:");
let contrasenaIngresada = prompt("Ingresa tu contraseña:");

function selectorDeColor () {
  let color = prompt(
    "¿Que color quiere para su remera? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco")
  alert("Seleccionaste "+ color + ", Perfecto!");
  alert ("Adios usuario, Que tengas un buen dia!")
  return;
}


for (; intentos < 3; intentos++) {
  if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
    alert("¡Bienvenido " + usuario + "!");
    accesoPermitido = true;
    selectorDeColor();
    break;
  } else {
    alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3");
    usuarioIngresado = prompt("Ingresa tu usuario:");
    contrasenaIngresada = prompt("Ingresa tu contraseña:");
  }

}
alert("Has excedido el número de intentos permitidos");

Correccion
*/

let usuario = "usuario";
let contrasena = "admin";
let coloresPermitidos = ["Rojo", "Negro", "Gris", "Verde", "Blanco", "rojo", "negro", "gris", "verde", "blanco"];
let intentos = 1;

function validarUsuario() {
  let usuarioIngresado = prompt("Ingresa tu usuario:");
  let contrasenaIngresada = prompt("Ingresa tu contraseña:");

  while (intentos < 3) {
    if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
      mostrarBienvenida();
      seleccionarColor();
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

function seleccionarColor() {
  let color = prompt(
    "¿Qué color quiere para su remera? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco "
  );
  while (!coloresPermitidos.includes(color) || typeof color !== "string") {
    color = prompt(
      "El color ingresado no es válido. Por favor, seleccione un color de la lista: " +
        coloresPermitidos.join(", ")
    );
  }
  alert("Seleccionaste " + color + ", perfecto!");
}

function mostrarBienvenida() {
  alert("¡Bienvenido " + usuario + "!");
}

function mostrarDespedida() {
  alert("Adios usuario, que tengas un buen día!");
}

validarUsuario();


