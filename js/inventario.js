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
const url = "../data/inventario.json"
let ropas = JSON.parse(localStorage.getItem("Inventario")) || [];

//fetch
fetch(url)
  .then(res => res.json())
  .then(ropasData => {
    ropas = ropasData;
    crearHtml(ropas);
  });
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
function pushInventario(arr, ropa) {
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
  <td><button class="btn orange" id="${codigo}-editar-producto">Editar Producto</button></td>
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
  const botonesBorrar = document.querySelectorAll("td .btn.red");
botonesBorrar.forEach((btn) => {
  btn.addEventListener("click", () => {
    const codigo = btn.id;
    const index = ropas.findIndex((el) => el.codigo === codigo);
    ropas.splice(index, 1);
    guardarLS(ropas);
    crearHtml(ropas);
  });
});
  const editarBotones = document.querySelectorAll("td .btn.orange");
  editarBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codigo = btn.id.split("-")[0];
      const item = ropas.find((el) => el.codigo == codigo);
      const formHtml = `
      <form id="editar-form" class="formulario">
        <label for="prenda">Prenda:</label>
        <input type="text" id="prenda" name="prenda" value="${item.prenda}" required>
        <label for="color">Color:</label>
        <input type="text" id="color" name="color" value="${item.color}" required>
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" name="codigo" value="${item.codigo}" required>
        <label for="tamaño">Tamaño:</label>
        <input type="text" id="tamaño" name="tamaño" value="${item.tamaño}" required>
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" value="${item.precio}" required>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" value="${item.cantidad}" required>
        <label for="imagen">Imagen:</label>
        <input type="text" id="imagen" name="imagen" value="${item.img}" required>
        <button type="submit" class="btn green">Guardar</button>
      </form>
    `;
      const tr = btn.parentNode.parentNode;
      tr.innerHTML = `<td colspan="9">${formHtml}</td>`;

      const form = document.querySelector("#editar-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        item.prenda = form.prenda.value;
        item.color = form.color.value;
        item.codigo = form.codigo.value;
        item.tamaño = form.tamaño.value;
        item.precio = parseFloat(form.precio.value);
        item.cantidad = parseInt(form.cantidad.value);
        item.img = form.imagen.value;

        guardarLS(ropas);
        crearHtml(ropas);
        M.toast({ html: "El producto se actualizó" });
      });
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
//funcion principal
 crearHtml(ropas); 
//event listeners
formInventario.addEventListener("submit", (event) => {
  event.preventDefault();
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
    pushInventario(ropas, nuevaRopa);
    guardarLS(ropas);
    crearHtml(ropas);
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