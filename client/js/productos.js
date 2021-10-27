              select_area = document.querySelectorAll('input[name="area"]');
              area = document.querySelector('input[name="area"]:checked').value;

              select_categoria = document.querySelectorAll('input[name="categoria"]');
              categoria = document.querySelector('input[name="categoria"]:checked').value;

              select_marca = document.querySelectorAll('input[name="marca"]');
              marca = document.querySelector('input[name="marca"]:checked').value;

// llamamos al input con la clase "search_bar" y tomamos su valor
search_bar = document.querySelector(".search_bar");
search = document.querySelector(".search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
search_bar.addEventListener('input', function(){
  search = document.querySelector(".search_bar").value;
  tarjetas_productos()
})

// funcion que crea los filtros de areas
function filtros_areas() {
          fetch("http://localhost/github/Sol-de-Mayo/server/areas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterArea = document.getElementById("filter_area");

              data.map((area => {
              const i_area = document.createElement("input");
              i_area.type = "radio";
              i_area.value = area.id;
              i_area.name = "area";
              i_area.className = "select_area";
              i_area.id = "area" + area.id;
              const l_area = document.createElement("label");
              l_area.htmlFor = "area" + area.id;
              l_area.innerHTML = area.n_area;

              divFilterArea.appendChild(i_area);
              divFilterArea.appendChild(l_area);
              }))
              // llamamos al input por su name y tomamos su valor
              select_area = document.querySelectorAll('input[name="area"]');
              area = document.querySelector('input[name="area"]:checked').value;

              // actualizar funcion cuando cambia el contenido de "select_area"
              select_area.forEach(radio => radio.addEventListener('change', () => {area=radio.value, tarjetas_productos()}));
            });       
};

// funcion que crea los filtros de categorias
function filtros_categorias() {
          fetch("http://localhost/github/Sol-de-Mayo/server/categorias")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterCategoria = document.getElementById("filter_categoria");

              data.map((categoria => {
              const i_categoria = document.createElement("input");
              i_categoria.type = "radio";
              i_categoria.value = categoria.id;
              i_categoria.name = "categoria";
              i_categoria.className = "select_categoria";
              i_categoria.id = "categoria" + categoria.id;
              const l_categoria = document.createElement("label");
              l_categoria.htmlFor = "categoria" + categoria.id;
              l_categoria.innerHTML = categoria.tipo;

              divFilterCategoria.appendChild(i_categoria);
              divFilterCategoria.appendChild(l_categoria);
              }))
              // llamamos al input por su name y tomamos su valor
              select_categoria = document.querySelectorAll('input[name="categoria"]');
              categoria = document.querySelector('input[name="categoria"]:checked').value;

              // actualizar funcion cuando cambia el contenido de "select_area"
              select_categoria.forEach(radio => radio.addEventListener('change', () => {categoria=radio.value, tarjetas_productos()}));
            });       
};

// funcion que crea los filtros de marcas
function filtros_marcas() {
          fetch("http://localhost/github/Sol-de-Mayo/server/marcas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterMarca = document.getElementById("filter_marca");

              data.map((marca => {
              const i_marca = document.createElement("input");
              i_marca.type = "radio";
              i_marca.value = marca.id;
              i_marca.name = "marca";
              i_marca.className = "select_marca";
              i_marca.id = "marca" + marca.id;
              const l_marca = document.createElement("label");
              l_marca.htmlFor = "marca" + marca.id;
              l_marca.innerHTML = marca.n_marca;

              divFilterMarca.appendChild(i_marca);
              divFilterMarca.appendChild(l_marca);
              }))
              // llamamos al input por su name y tomamos su valor
              select_marca = document.querySelectorAll('input[name="marca"]');
              marca = document.querySelector('input[name="marca"]:checked').value;

              // actualizar funcion cuando cambia el contenido de "select_area"
              select_marca.forEach(radio => radio.addEventListener('change', () => {marca=radio.value, tarjetas_productos()}));
            });       
};

// funcion que crea las tarjetas de productos
function tarjetas_productos() {
          fetch("http://localhost/github/Sol-de-Mayo/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("datos");
              divDatos.innerHTML="";
              
              // filtra el area
              if (area !== "") {
                data = data.filter(function(items){
                return (items.id_area == area);
                });
                console.log(data);
              } else{}

              // filtra la marca
              if (marca !== "") {
                data = data.filter(function(items){
                return (items.id_marca == marca);
                });
                console.log(data);
              } else{}

              // filtra la categoria
              if (categoria !== "") {
                data = data.filter(function(items){
                return (items.id_categoria == categoria);
                });
                console.log(data);
              } else{}

              // filtra la barra d busqueda
              if (search !== "") {
                data = data.filter(function(items){
                return items.nombre.toLowerCase().indexOf(search.toLowerCase()) > -1;
                });
                console.log(data);
              } else{}

              // si no puede traer ningun producto de la base de datos muestra un mensaje
              if (data.length == 0) {
                const div_non_result = document.createElement("div");
                const non_result = document.createElement("p");
                non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                div_non_result.appendChild(non_result);
                divDatos.appendChild(div_non_result);
                console.log(non_result);
              }else{}

              data.map((producto => {
              const div = document.createElement("div");
              div.className += "card"; 
              const img = document.createElement("img");
              img.src = producto.imagen;
              img.className = "img-card";
              const nombre = document.createElement("h2");
              nombre.innerText = producto.nombre;
              const descripcion = document.createElement("h3");
              descripcion.innerText = producto.descripcion;
              const marca = document.createElement("h3");
              marca.innerText = producto.n_marca;
              const precio = document.createElement("p");
              precio.innerText = "precio: " + "$" + producto.precio;
              const stock = document.createElement("p");
              stock.innerText = "quedan: " + producto.stock;
              div.appendChild(img);
              div.appendChild(nombre);
              div.appendChild(descripcion);
              div.appendChild(marca);
              div.appendChild(precio);
              div.appendChild(stock);
              divDatos.appendChild(div);
              }))
            });
        };
      document.addEventListener("DOMContentLoaded", function (event) {
        filtros_areas()
        filtros_categorias()
        filtros_marcas()
        tarjetas_productos()
        //Las peticiones se hacen a la uri del server segun las rutas definidas        
      });