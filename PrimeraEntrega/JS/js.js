let usuario = "usuario";
let contrasena = "admin";

let usuarioIngresado = prompt("Ingresa tu usuario:");
let contrasenaIngresada = prompt("Ingresa tu contraseña:");

function selectorDeColor () {
  let color = prompt(
    "¿Que color quiere para su remera? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco")
  alert("Selecionaste "+ color + ",Perfecto!");
  alert ("Adios usuario, Que tengas un buen dia!")
  return;
} 
for (let intentos = 1; intentos <= 3; intentos++) {
  if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
    alert("¡Bienvenido " + usuario + "!");
      selectorDeColor();
      break;
} else {
    alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3");
    usuarioIngresado = prompt("Ingresa tu usuario:");
    contrasenaIngresada = prompt("Ingresa tu contraseña:");
  }
}

if (intentos > 3) {
    alert("Has excedido el número de intentos permitidos");
}


