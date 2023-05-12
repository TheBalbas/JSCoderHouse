//constantes y variables
const prenda = document.querySelector("#prenda");
const color = document.querySelector("#color");
const codigo = document.querySelector("#codigo");
const tamaño = document.querySelector("#tamaño");
const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const img = document.querySelector("#img");
const search = document.querySelector("#search");
const tbody = document.querySelector("#table-body");
const formInventario = document.querySelector("#formInventario");
const radios = document.querySelectorAll('input[type="radio"]');
const btnAscendente = document.querySelector("#ordenar-ascendente");
const btnDescendente = document.querySelector("#ordenar-descendente");

let ropas = JSON.parse(localStorage.getItem("Inventario")) || Inventario;
//fetch
const carga = async () => {
  try {
    const res = await fetch("../DATA/inventario.json");
    const inventario = await res.json();
    ropas = inventario;
    crearHtml(ropas);
  } catch (error) {
    console.error(error);
  }
};
carga();
//funciones


function ropa(prenda, color, codigo, tamaño, precio, cantidad, img) {
  this.prenda = prenda;
  this.color = color;
  this.codigo = codigo;
  this.tamaño = tamaño;
  precio == "" ? (this.precio = 1) : (this.precio = precio);
  this.cantidad = cantidad;
  img == "" ? (this.img = `https://via.placeholder.com/150`) : (this.img = img);
}
function cargarInventario(arr, ropa) {
  arr.push(ropa);
}
function guardarLS(arr) {
  localStorage.setItem("Inventario", JSON.stringify(arr));
}

function filtrar(arr, filtro) {
  busquedaRegex = new RegExp(filtro, "gi");
  return arr.filter((el) => {
    const prenda = el.prenda.toLowerCase();
    const color = el.color.toLowerCase();
    const codigo = el.codigo.toLowerCase();
    const tamaño = el.tamaño.toLowerCase();

    return (
      prenda.indexOf(filtro.toLowerCase()) !== -1 ||
      color.indexOf(filtro.toLowerCase()) !== -1 ||
      codigo.indexOf(filtro.toLowerCase()) !== -1 ||
      tamaño.indexOf(filtro.toLowerCase()) !== -1 ||
      prenda.match(busquedaRegex) ||
      color.match(busquedaRegex)
    );
  });
}

function validarDatos(nuevaRopa) {
  if (!nuevaRopa.prenda) {
    M.toast({ html: "El campo prenda es obligatorio", classes: "red" });
    return false;
  }
  if (!nuevaRopa.codigo) {
    M.toast({ html: "El campo código es obligatorio", classes: "red" });
    return false;
  }
  const prendaExistente = ropas.find((el) => el.codigo === nuevaRopa.codigo);
  if (prendaExistente) {
    M.toast({ html: "Ya existe una prenda con ese código", classes: "red" });
    return false;
  }
  if (nuevaRopa.precio <= 0) {
    M.toast({ html: "El precio debe ser mayor que cero", classes: "red" });
    return false;
  }
  if (nuevaRopa.cantidad <= 0) {
    M.toast({ html: "La cantidad debe ser mayor que cero", classes: "red" });
    return false;
  }
  return true;
}

function crearHtml(arr) {
  tbody.innerHTML = "";
  
  let html = "";
  for (const item of arr) {
    const { prenda, color, codigo, tamaño, precio, cantidad, img } = item;
    html = `<tr>
  <td>${prenda}</td>
  <td>${color}</td>
  <td>${codigo}</td>
  <td>${tamaño}</td>
  <td>${precio}</td>
  <td>
    <button class="btn green" id="sumar-${codigo}">+</button>
    <button class="btn red" id="restar-${codigo}">-</button>
    <span id="cantidad-${codigo}">${cantidad}</span>
  </td>
  <td><img src="${img}"/></td>
  <td><button class="btn red" id="${codigo}">Borrar</button></td>
  <td><button class="btn orange" id="${codigo}-modificar-precio">Modificar precio</button></td>
  </tr>`;
    tbody.innerHTML += html;
  }
  const sumarBotones = document.querySelectorAll("td .btn.green");
  const restarBotones = document.querySelectorAll("td .btn.red");
  sumarBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codigo = btn.id.split("-")[1];
      const prenda = ropas.find((el) => el.codigo === codigo);
      prenda.cantidad++;
      guardarLS(ropas);
      crearHtml(ropas);
    });
  });
  
  restarBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codigo = btn.id.split("-")[1];
      const prenda = ropas.find((el) => el.codigo === codigo);
      if (prenda.cantidad > 0) {
        prenda.cantidad--;
        guardarLS(ropas);
        crearHtml(ropas);
      }
    });
  });
  
  const arrayBotones = document.querySelectorAll("td .btn");
  arrayBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id.includes("-modificar-precio")) {
  
        const codigo = btn.id.split("-")[0];
        const item = ropas.find((el) => el.codigo == codigo);
        const nuevoPrecio = prompt("Ingrese el nuevo precio:");
        if (nuevoPrecio) {
          item.precio = parseFloat(nuevoPrecio);
          guardarLS(ropas);
          crearHtml(ropas);
          M.toast({html: 'El precio se modifico'})
        }
      } else {
        ropas = ropas.filter((el) => el.codigo != btn.id);
        guardarLS(ropas);
        crearHtml(ropas);
  
      }
    });
  });
  }
  
function ordenar(arr, tipo) {
  if (tipo === "ascendente") {
    return arr.sort((a, b) => a.precio - b.precio);
  } else if (tipo === "descendente") {
    return arr.sort((a, b) => b.precio - a.precio);
  }
}
//event listeners
formInventario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevaRopa = new ropa(
    prenda.value,
    color.value,
    codigo.value,
    tamaño.value,
    precio.value,
    cantidad.value,
    img.value
  );
  if (validarDatos(nuevaRopa)) {
    cargarInventario(ropas, nuevaRopa);
    guardarLS(ropas);
    crearHtml(ropas);
    M.toast({ html: "Se guardo una nueva prenda" });
    formInventario.reset();
  }
});

search.addEventListener("input", () => {
  let nuevoFiltro = filtrar(ropas, search.value, "prenda");
  crearHtml(nuevoFiltro);
});

btnAscendente.addEventListener("click", () => {
  const ordenado = ordenar(ropas, "ascendente");
  crearHtml(ordenado);
});

btnDescendente.addEventListener("click", () => {
  const ordenado = ordenar(ropas, "descendente");
  crearHtml(ordenado);
});

for (const radio of radios) {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      search.addEventListener("input", () => {
        let nuevoFiltro = filtrar(ropas, search.value, radio.value);
        crearHtml(nuevoFiltro);
      });
    }
  });
}

//funcion principal
crearHtml(ropas);
