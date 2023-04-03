
//Este codigo es una version 2.0 del anterior, agregando Arrays para que el usuario no pueda ingresar un color no valido dentro de los preestablecidos, y ademas agregue una funcion para que el usuario pueda ingresar un nuevo color y prenda para la proxima vez. Y esto se guarda en un console


/*let usuario = "usuario";
let contrasena = "admin";
const ropaPermitida = {
  pantalon: {
    colores: ["rojo", "negro", "gris", "verde", "blanco", "Rojo", "Negro", "Gris", "Verde", "Blanco"], 
    tallas: ["XXL", "XL", "L", "M", "S", "xxl", "xl", "l", "m", "s"]
  },
  buzo: {
    colores: ["rojo", "negro", "gris", "verde", "blanco", "Rojo", "Negro", "Gris", "Verde", "Blanco"],
    tallas: ["XXL", "XL", "L", "M", "S", "xxl", "xl", "l", "m", "s"]
  },
  chaleco: {
    colores: ["rojo", "negro", "gris", "verde", "blanco", "Rojo", "Negro", "Gris", "Verde", "Blanco"],
    tallas: ["XXL", "XL", "L", "M", "S", "xxl", "xl", "l", "m", "s"]
  }
};

let intentos = 1;

let nuevaRopa = {
  tipo:"",
};

let ropaElegida = [];

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
  let tipo = prompt(
    "¿Qué tipo de ropa desea comprar? (Indique colocando el nombre del tipo de ropa) \n Chaleco \n Pantalon \n Gorra"
  );
  
  while (!ropaPermitida[tipo.toLowerCase()] || typeof tipo !== "string") {
    tipo = prompt(
      "El tipo de ropa ingresado no es válido. Por favor, seleccione un tipo de la lista: (Indique colocando el nombre del tipo de ropa) \n Chaleco \n Pantalon \n Gorra"
    );
  }
  
  let color = prompt(
    "¿Qué color quiere? (Indique colocando el nombre del color) \n Rojo \n Negro \n Gris \n Verde \n Blanco "
  );
  
  while (!ropaPermitida[tipo.toLowerCase()].colores.includes(color.toLowerCase()) || typeof color !== "string") {
    color = prompt(
      "El color ingresado no es válido. Por favor, seleccione un color de la lista: (Indique colocando el nombre del color)  \n Rojo \n Negro \n Gris \n Verde \n Blanco"
    );
  }
  
  let talla = prompt(
    "¿Qué talla necesita? (Indique colocando la talla en letra o número) \n S \n M \n L \n XL \n XXL"
  );
  
  while (!ropaPermitida[tipo.toLowerCase()].tallas.includes(talla.toLowerCase()) || typeof talla !== "string") {
    talla = prompt(
      "La talla ingresada no es válida. Por favor, seleccione una talla de la lista: (Indique colocando la talla en letra o número) \n S \n M \n L \n XL \n XXL"
    );
  }
  alert("Seleccionaste " + tipo + " " + color + " " + talla + ", perfecto!");
  rropaElegida.push({tipo: tipo, color: color, talla: talla});
  console.log ("La ropa elegida es:", ropaElegida)
}

function mostrarBienvenida() {
  alert("¡Bienvenido " + usuario + "!");
}

function mostrarDespedida() {
  alert("Adios usuario, que tengas un buen día!");
}

function mostrarNuevaRopa(tipo,) {
  let mensaje1 = "¿Qué color y tipo de " + tipo + " te gustaría que añadiéramos la próxima vez?";
  let nuevoColor = prompt(mensaje1);
  nuevaRopa.push({ tipo: ropa});
  alert("Muchas gracias por su sugerencia");
  console.log("La nueva ropa es:", nuevaRopa);
}*/




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
  
  for (let i = 0; i < nuevaRopa.items.length; i++) {
    for (let j = i+1; j < nuevaRopa.items.length; j++) {
      if (nuevaRopa.items[i].toLowerCase() === nuevaRopa.items[j].toLowerCase() &&
          nuevaRopa.colores[i].toLowerCase() === nuevaRopa.colores[j].toLowerCase()) {
        nuevaRopa.items.splice(j, 1);
        nuevaRopa.colores.splice(j, 1);
        j--;
      }
    }
  }
  
  alert("Muchas gracias por su sugerencia");
  console.log("La nueva ropa es:", nuevaRopa);
}



validarUsuario();

