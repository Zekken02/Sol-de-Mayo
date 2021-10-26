// llamamos al select con la clase "select_categoria" y tomamos su valor
select_categoria = document.querySelector(".select_categoria");
categoria = document.querySelector(".select_categoria").value;

// llamamos al input con la clase "search_bar" y tomamos su valor
search_bar = document.querySelector(".search_bar");
search = document.querySelector(".search_bar").value;

// llamamos al select con la clase "select_area" y tomamos su valor
select_area = document.querySelector(".select_area");
area = document.querySelector(".select_area").value;

// llamamos al select con la clase "select_marca" y tomamos su valor
select_marca = document.querySelector(".select_marca");
marca = document.querySelector(".select_marca").value;


// actualizar funcion cuando cambia el contenido de "select_area"
select_area.addEventListener('change', function(){
  area = document.querySelector(".select_area").value;
  retrieveData()
})

// actualizar funcion cuando cambia el contenido de "select_marca"
select_marca.addEventListener('change', function(){
  marca = document.querySelector(".select_marca").value;
  retrieveData()
})

// actualizar funcion cuando cambia el contenido de "select_categoria"
select_categoria.addEventListener('change', function(){
  categoria = document.querySelector(".select_categoria").value;
  retrieveData()
})

// actualizar funcion cuando cambia el contenido de "search_bar"
search_bar.addEventListener('input', function(){
  search = document.querySelector(".search_bar").value;
  retrieveData()
})

// funcion que crea las tarjetas de productos
function retrieveData () {
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
        retrieveData(); 
         const button = document.querySelector(".button");
         button.addEventListener("click", () => {
           retrieveData();
         });
        //Las peticiones se hacen a la uri del server segun las rutas definidas        
      });