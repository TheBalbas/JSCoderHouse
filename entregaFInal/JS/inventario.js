  
const prenda = document.querySelector("#prenda"),
color = document.querySelector("#color"),
codigo = document.querySelector("#codigo"),
tamaño = document.querySelector("#tamaño"),
precio = document.querySelector("#precio"),
cantidad = document.querySelector("#cantidad"),
img = document.querySelector("#img"),
search = document.querySelector("#search"),
tbody = document.querySelector("#table-body"),
formInventario = document.querySelector("#formInventario");

const radios = document.querySelectorAll('input[type="radio"]');


const Inventario = "../DATA/inventario.json"
fetch(Inventario)
.then (res => res.json())
.then (Inventario => {
  ropas = Inventario;
  crearHtml(ropas);
})
.catch(error => console.error(error));





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
return arr.filter((el) => {
  const prenda = el.prenda.toLowerCase();
  const color = el.color.toLowerCase();
  const codigo = el.codigo.toLowerCase();
  const tamaño = el.tamaño.toLowerCase();
  const busqueda = filtro.toLowerCase();

  return (
    prenda.indexOf(busqueda) !== -1 ||
    color.indexOf(busqueda) !== -1 ||
    codigo.indexOf(busqueda) !== -1 ||
    tamaño.indexOf(busqueda) !== -1 ||
    prenda.match(new RegExp(busqueda, "gi")) ||
    color.match(new RegExp(busqueda, "gi"))
  );
});
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


crearHtml(ropas);


formInventario.addEventListener("submit", (e) => {
e.preventDefault();
const nuevaRopa = new ropa(
  prenda.value,
  color.value,
  codigo.value,
  tamaño.value,
  precio.value,
  cantidad.value,
  img.value,
)
M.toast({html: 'Se guardo una nueva prenda'});

cargarInventario(ropas, nuevaRopa);
guardarLS(ropas);
crearHtml(ropas);
formInventario.reset()
});


search.addEventListener("input", () => {
let nuevoFiltro = filtrar(ropas, search.value, "prenda");
crearHtml(nuevoFiltro);
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



