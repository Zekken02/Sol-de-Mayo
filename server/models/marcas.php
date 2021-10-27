<?php
function mostrar_marcas() {
    include 'conexion.php';
    $sql = "SELECT marca.id, marca.n_marca FROM marca";
    $resultado = mysqli_query($conexion,$sql);
    $row= $resultado->fetch_all(1);
    return json_encode($row);
}
