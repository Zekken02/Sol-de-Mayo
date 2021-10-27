<?php
//Utilizamos un metodo GET para traer todos los productos.
router("GET", "/areas", function(){
    include_once("./models/areas.php");
    echo mostrar_areas();

});

