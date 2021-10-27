<?php
function mostrar_categorias() {
    include 'conexion.php';
    $sql = "SELECT categoria.id, categoria.tipo FROM categoria";
    $resultado = mysqli_query($conexion,$sql);
    $row= $resultado->fetch_all(1);
    return json_encode($row);
}
