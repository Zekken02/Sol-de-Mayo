<?php
function mostrar_productos() {
    include 'conexion.php';
    $sql = "SELECT productos.id, productos.nombre, productos.descripcion, productos.foto, productos.precio, productos.stock, productos.id_categoria, productos.id_area, productos.id_marca, categoria.tipo, marca.n_marca, area.n_area FROM productos LEFT JOIN categoria ON productos.id_categoria = categoria.id LEFT JOIN marca ON productos.id_marca = marca.id LEFT JOIN area ON productos.id_area = area.id";
    $resultado = mysqli_query($conexion,$sql);
    $row= $resultado->fetch_all(1);
    return json_encode($row);
}
