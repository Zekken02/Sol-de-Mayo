function retrieveData () {
          fetch("http://localhost/sdm/server/productos")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              // data = data[0];
              // console.log(data);
              const divDatos = document.getElementById("datos");
              divDatos.innerHTML="";
              data.map((producto => {
                const div = document.createElement("div");
                div.className += "card"; 
                const img = document.createElement("img");
                img.src = producto.imagen;
                img.className = "img-card";
                const nombre = document.createElement("h3");
                nombre.innerText = producto.nombre;
                const descripcion = document.createElement("h2");
                descripcion.innerText = producto.descripcion;
                const precio = document.createElement("p");
                precio.innerText = "precio: " + "$" + producto.precio;
                const stock = document.createElement("p");
                stock.innerText = "quedan: " + producto.stock;
                div.appendChild(img);
                div.appendChild(nombre);
                div.appendChild(descripcion);
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
      // function retrieveData () {
      //     fetch("http://localhost/sdm/server/productos")
      //     .then((res) => res.json())
      //     .then((data) => {
      //         console.log(data);
      //         // data = data[0];
      //         // console.log(data);
      //         const divDatos = document.getElementById("datos");
      //         divDatos.innerHTML="";
      //         data.map((producto => {
      //           const div = document.createElement("div");
      //           div.className += "card"; 
      //           const img = document.createElement("img");
      //           img.src = producto.imagen;
      //           img.className = "img-card";
      //           const nombre = document.createElement("h3");
      //           nombre.innerText = producto.nombre;
      //           const descripcion = document.createElement("h2");
      //           descripcion.innerText = producto.descripcion;
      //           const precio = document.createElement("p");
      //           precio.innerText = "precio: " + "$" + producto.precio;
      //           const stock = document.createElement("p");
      //           stock.innerText = "quedan: " + producto.stock;
      //           div.appendChild(img);
      //           div.appendChild(nombre);
      //           div.appendChild(descripcion);
      //           div.appendChild(precio);
      //           div.appendChild(stock);
      //           divDatos.appendChild(div);

      //         }))
      //       });
      //   };
      // document.addEventListener("DOMContentLoaded", function (event) {
      //   retrieveData(); 
      //    const button = document.querySelector(".button");
      //    button.addEventListener("click", () => {
      //      retrieveData();
      //    });
      //   //Las peticiones se hacen a la uri del server segun las rutas definidas        
      // });