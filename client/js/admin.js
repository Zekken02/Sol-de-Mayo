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

//  llamamos al input con el id "id_prod"
id_prod_bar = document.getElementById("id_prod")

// creamos una funcion para cuando el valor de id_prod cambie
function id_prod_change(){
  fetch("http://localhost/github/Sol-de-Mayo/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const inputNombre = document.querySelector(".nombre_prod");
              const inputDescripcion = document.querySelector(".descripcion_prod");
              const inputPrecio = document.querySelector(".precio_prod");
              const inputFoto = document.querySelector(".foto_prod");
              const inputArea = document.querySelector(".add_area");
              const inputCategoria = document.querySelector(".add_categoria");
              const inputMarca = document.querySelector(".add_marca");
              
               // filtra el producto por id
                 data = data.filter(function(items){
                 return (items.id == id_prod_bar.value);
                 });
                 console.log(data);

              data.map((producto => {
                inputNombre.value = producto.nombre;
                inputDescripcion.value = producto.descripcion;
                inputPrecio.value = producto.precio;
                inputFoto.value = producto.foto;
                inputArea.value = producto.id_area;
                inputCategoria.value = producto.id_categoria;
                inputMarca.value = producto.id_marca;
              }))
            });
          upload_buttons = document.querySelector(".upload_buttons");
          upload_buttons.innerHTML="";

          const div_del_upload = document.createElement("div");
          div_del_upload.className = "col-6";
          const btn_del_upload = document.createElement("button");
          btn_del_upload.type = "submit";
          btn_del_upload.className = "btn btn_cancelar";
          btn_del_upload.innerText = "Cancelar"

          const div_edit_upload = document.createElement("div");
          div_edit_upload.className = "col-6";
          const btn_edit_upload = document.createElement("button");
          btn_edit_upload.type = "submit";
          btn_edit_upload.formAction = "prod_edit.php";
          btn_edit_upload.className = "btn btn_cargar";
          btn_edit_upload.innerText = "Editar"

          div_del_upload.appendChild(btn_del_upload);
          upload_buttons.appendChild(div_del_upload);
          div_edit_upload.appendChild(btn_edit_upload);
          upload_buttons.appendChild(div_edit_upload);
}

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
              o_area.innerText = area.n_area;
              const z_area = document.createElement("option");
              z_area.value = area.id;
              z_area.innerText = area.n_area;

              divFilterArea.appendChild(o_area);
              divAddArea.appendChild(z_area);
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
              o_categoria.innerText = categoria.tipo;
              const z_categoria = document.createElement("option");
              z_categoria.value = categoria.id;
              z_categoria.innerText = categoria.tipo;

              divFilterCategoria.appendChild(o_categoria);
              divAddCategoria.appendChild(z_categoria);
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
              o_marca.innerText = marca.n_marca;
              const z_marca = document.createElement("option");
              z_marca.value = marca.id;
              z_marca.innerText = marca.n_marca;

              divFilterMarca.appendChild(o_marca);
              divAddMarca.appendChild(z_marca);
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
              editar.innerHTML = '<button class="btn btn_edit" id="edit'+ producto.id + '" name"edit"><i class="fa-solid fa-pen"></i></button>';
              const eliminar = document.createElement("th");
              eliminar.innerHTML = '<button class="btn btn_del" id="delete'+ producto.id + '" name"delete"><i class="fa-solid fa-trash-can"></i></button>';


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

              btnEdit = document.getElementById("edit" + producto.id)

              btnEdit.addEventListener('click', function(){
                id_prod_bar.value = producto.id
                id_prod_change()
              })

              btnDelete = document.getElementById("delete" + producto.id)

              btnDelete.addEventListener('click', function(){
                var para = new URLSearchParams();
                para.append("id", producto.id);
                location.href = "prod_delete.php?" + para.toString();
              })

              }))
            });
        };
      document.addEventListener("DOMContentLoaded", function (event) {
        filtros_areas()
        filtros_categorias()
        filtros_marcas()
        lista_productos()       
      });