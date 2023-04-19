
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


const Inventario = [
  {
    prenda: "Remera Chopper One piece",
    color: "Amarillo/azul",
    codigo: "#2103",
    tamaño: "M", 
    precio: "5000",
    cantidad: "37",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/1hombre-one-piece-7-amarillo-6b17c32e7754e7770e15858441371513-1024-1024-8d9c006c61fd61e70216631025243831-1024-1024.webp" ,
  },
  {
    prenda: "Remera Power",
    color: "Negro",
    codigo: "#2104",
    tamaño: "XL", 
    precio: "5500",
    cantidad: "22",
    img:"https://http2.mlstatic.com/D_NQ_NP_835107-MLA51963168914_102022-W.jpg",
  },
  {
    prenda: "Remera Inusuke Demon Slayer",
    color: "Gris",
    codigo: "#2106",
    tamaño: "XLL", 
    precio: "4000",
    cantidad: "10",
    img: "https://kaaz.com.ar/wp-content/uploads/2022/11/25-SKU-kaaz-ushuaia-remeras-anime-13-Inogris.jpg" ,
  },
  {
    prenda: "Pantalon Bakugo",
    color: "Beige",
    codigo: "#2107",
    tamaño: "S", 
    precio: "6500",
    cantidad: "10",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/1hombre-one-piece-7-amarillo-6b17c32e7754e7770e15858441371513-1024-1024-8d9c006c61fd61e70216631025243831-1024-1024.webp" ,
  },
  {
    prenda: "Pantalon Akatsuki",
    color: "Negro/Rojo",
    codigo: "#2108",
    tamaño: "L", 
    precio: "5000",
    cantidad: "12",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/photoroom-20210828_1134531-a6a28f0d9e7cd9c36a16305352707501-1024-1024.png" ,
  },
];


let ropas = JSON.parse(localStorage.getItem("Inventario")) || Inventario;


function ropa(prenda, color, codigo, tamaño, cantidad, precio, img) {
  this.prenda = prenda;
  this.color = color;
  this.codigo = codigo;
  this.tamaño = tamaño;
  this.cantidad = cantidad; 
  precio == "" ? (this.precio = 1) : (this.precio = precio);
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
    img.value
    
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




