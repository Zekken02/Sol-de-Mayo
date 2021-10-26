select_categoria = document.querySelector(".select_categoria");
categoria = document.querySelector(".select_categoria").value;
search_bar = document.querySelector(".search_bar");
search = document.querySelector(".search_bar").value;
select_area = document.querySelector(".select_area");
area = document.querySelector(".select_area").value;
select_marca = document.querySelector(".select_marca");
marca = document.querySelector(".select_marca").value;

select_area.addEventListener('change', function(){
  area = document.querySelector(".select_area").value;
  retrieveData()
})

select_marca.addEventListener('change', function(){
  marca = document.querySelector(".select_marca").value;
  retrieveData()
})

select_categoria.addEventListener('change', function(){
  categoria = document.querySelector(".select_categoria").value;
  retrieveData()
})

search_bar.addEventListener('input', function(){
  search = document.querySelector(".search_bar").value;
  retrieveData()
})

function retrieveData () {
          fetch("http://localhost/github/Sol-de-Mayo/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("datos");
              divDatos.innerHTML="";
              
              if (area !== "") {
                data = data.filter(function(items){
                return (items.id_area == area);
                });
                console.log(data);
              } else{}

               if (marca !== "") {
                data = data.filter(function(items){
                return (items.id_marca == marca);
                });
                console.log(data);
              } else{}

              if (categoria !== "") {
                data = data.filter(function(items){
                return (items.id_categoria == categoria);
                });
                console.log(data);
              } else{}

              if (search !== "") {
                data = data.filter(function(items){
                return items.nombre.toLowerCase().indexOf(search.toLowerCase()) > -1;
                });
                console.log(data);
              } else{}

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