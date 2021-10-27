<?php
//Utilizamos un metodo GET para traer todos los productos.
router("GET", "/marcas", function(){
    include_once("./models/marcas.php");
    echo mostrar_marcas();

});

