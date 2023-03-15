let usuario = "usuario";
let contrasena = "admin";

let usuarioIngresado = prompt("Ingresa tu usuario:");
let contrasenaIngresada = prompt("Ingresa tu contraseña:");



for (let intentos = 1; intentos <= 3; intentos++) {
  if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
    alert("¡Bienvenido " + usuario + "!");
    let opcion = prompt(
        "¿Que color quiere para su remera \n1-Rojo \n2-Negro \n3-Gris \n4-Verde \n5-Blanco)")
        if (opcion == "1") {
            alert("Seleccionaste Rojo");
            alert("Adios usuario!")
            break;
          } else if (opcion == "2") {
            alert("Seleccionaste Negro");
            alert("Adios usuario!")
            break;
          } else if (opcion == "3") {
            alert("Seleccionaste Gris");
            alert("Adios usuario!")
            break;
          } else if (opcion == "4") {
            alert("Seleccionaste Verde");
            alert("Adios usuario!")
            break;
          } else if (opcion == "5") {
            alert("Seleccionaste Blanco");
            alert("Adios usuario!")
            break;
          } else {
            alert("Opción no válida");
            alert("Adios usuario!")
            break;
  }
} else {
    alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3");
    usuarioIngresado = prompt("Ingresa tu usuario:");
    contrasenaIngresada = prompt("Ingresa tu contraseña:");
  }
}

if (intentos > 3) {
    alert("Has excedido el número de intentos permitidos");
}


