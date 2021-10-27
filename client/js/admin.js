// llamamos al select con la clase "filter_area" y tomamos su valor
filter_area = document.querySelector(".filter_area");
area = document.querySelector(".filter_area").value;

// actualizar funcion cuando cambia el contenido de "filter_area"
filter_area.addEventListener('change', function(){
  area = document.querySelector(".filter_area").value;
  lista_productos()
})

// llamamos al select con la clase "filter_categoria" y tomamos su valor
filter_categoria = document.querySelector(".filter_categoria");
categoria = document.querySelector(".filter_categoria").value;

// actualizar funcion cuando cambia el contenido de "filter_marca"
filter_categoria.addEventListener('change', function(){
  categoria = document.querySelector(".filter_categoria").value;
  lista_productos()
})

// llamamos al select con la clase "filter_marca" y tomamos su valor
filter_marca = document.querySelector(".filter_marca");
marca = document.querySelector(".filter_marca").value;

// actualizar funcion cuando cambia el contenido de "filter_marca"
filter_marca.addEventListener('change', function(){
  marca = document.querySelector(".filter_marca").value;
  lista_productos()
})
// llamamos al input con la clase "search_bar" y tomamos su valor
prod_search_bar = document.querySelector(".prod_search_bar");
search = document.querySelector(".prod_search_bar").value;

// actualizar funcion cuando cambia el contenido de "search_bar"
prod_search_bar.addEventListener('input', function(){
  search = document.querySelector(".prod_search_bar").value;
  lista_productos()
})

function filtros_areas() {
          fetch("http://localhost/github/Sol-de-Mayo/server/areas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterArea = document.getElementById("filter_area");
              const divAddArea = document.getElementById("add_area");

              data.map((area => {
              const o_area = document.createElement("option");
              o_area.value = area.id;
              o_area.innerText = area.n_area

              divFilterArea.appendChild(o_area);
              divAddArea.appendChild(o_area);
              }))
            });       
};

function filtros_categorias() {
          fetch("http://localhost/github/Sol-de-Mayo/server/categorias")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterCategoria = document.getElementById("filter_categoria");
              const divAddCategoria = document.getElementById("add_categoria");

              data.map((categoria => {
              const o_categoria = document.createElement("option");
              o_categoria.value = categoria.id;
              o_categoria.innerText = categoria.tipo

              divFilterCategoria.appendChild(o_categoria);
              divAddCategoria.appendChild(o_categoria);
              }))
            });       
};

function filtros_marcas() {
          fetch("http://localhost/github/Sol-de-Mayo/server/marcas")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divFilterMarca = document.getElementById("filter_marca");
              const divAddMarca = document.getElementById("add_marca");

              data.map((marca => {
              const o_marca = document.createElement("option");
              o_marca.value = marca.id;
              o_marca.innerText = marca.n_marca

              divFilterMarca.appendChild(o_marca);
              divAddMarca.appendChild(o_marca);
              }))
            });       
};

function lista_productos() {
          fetch("http://localhost/github/Sol-de-Mayo/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("prod_list");
              divDatos.innerHTML="";
              
               // filtra el area
               if (area !== "") {
                 data = data.filter(function(items){
                 return (items.id_area == area);
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

               // filtra la marca
               if (marca !== "") {
                 data = data.filter(function(items){
                 return (items.id_marca == marca);
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
                 const fila_nr = document.createElement("tr");
                 const non_result = document.createElement("td");
                 non_result.innerText = "Lo sentimos, no encontramos resultados para su busqueda...";
                 fila_nr.appendChild(non_result);
                 divDatos.appendChild(fila_nr);
                 console.log(non_result);
               }else{
              const fila = document.createElement("tr");
              const id = document.createElement("td");
              id.innerText = "ID";
              const nombre = document.createElement("td");
              nombre.innerText = "Nombre";
              const descripcion = document.createElement("td");
              descripcion.innerText = "Descripcion";
              const foto = document.createElement("td");
              foto.innerText = "Foto";
              const precio = document.createElement("td");
              precio.innerText = "Precio";
              const stock = document.createElement("td");
              stock.innerText = "Stock";
              const n_area = document.createElement("td");
              n_area.innerText = "Area";
              const tipo = document.createElement("td");
              tipo.innerText = "categoria";
              const n_marca = document.createElement("td");
              n_marca.innerText = "Marca";
              const editar = document.createElement("td");
              editar.innerText = "Modificar";
              const eliminar = document.createElement("td");
              eliminar.innerText = "Eliminar";

              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(foto);
              fila.appendChild(precio);
              fila.appendChild(stock);
              fila.appendChild(n_area);
              fila.appendChild(tipo);
              fila.appendChild(n_marca);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              divDatos.appendChild(fila);
              }

              data.map((producto => {
              const fila = document.createElement("tr");
              const id = document.createElement("th");
              id.innerText = producto.id;
              const nombre = document.createElement("th");
              nombre.innerText = producto.nombre;
              const descripcion = document.createElement("th");
              descripcion.innerText = producto.descripcion;
              const foto = document.createElement("th");
              const img = document.createElement("img");
              img.src = producto.imagen;
              img.className = "img-card";
              const precio = document.createElement("th");
              precio.innerText = producto.precio;
              const stock = document.createElement("th");
              stock.innerText = producto.stock;
              const n_area = document.createElement("th");
              n_area.innerText = producto.n_area;
              const tipo = document.createElement("th");
              tipo.innerText = producto.tipo;
              const n_marca = document.createElement("th");
              n_marca.innerText = producto.n_marca;
              const editar = document.createElement("th");
              editar.innerHTML = '<a href="#"><i class="fa-solid fa-pen"></i></a>';
              const eliminar = document.createElement("th");
              eliminar.innerHTML = '<a href="#"><i class="fa-solid fa-xmark"></i></a>';


              fila.appendChild(id);
              fila.appendChild(nombre);
              fila.appendChild(descripcion);
              fila.appendChild(foto);
              fila.appendChild(precio);
              fila.appendChild(stock);
              fila.appendChild(n_area);
              fila.appendChild(tipo);
              fila.appendChild(n_marca);
              fila.appendChild(editar);
              fila.appendChild(eliminar);

              divDatos.appendChild(fila);
              }))
            });
        };
      document.addEventListener("DOMContentLoaded", function (event) {
        filtros_areas()
        filtros_categorias()
        filtros_marcas()
        lista_productos()       
      });