<?php
function mostrar_productos() {
    include 'conexion.php';
    $sql = "SELECT productos.id, productos.nombre, productos.descripcion, productos.foto, productos.precio, productos.stock, productos.id_categoria, categoria.tipo FROM productos LEFT JOIN categoria ON productos.id_categoria = categoria.id GROUP BY productos.id";
    $resultado = mysqli_query($conexion,$sql);
    $row= $resultado->fetch_all(1);
    return json_encode($row);
}
