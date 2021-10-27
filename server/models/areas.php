<?php
function mostrar_areas() {
    include 'conexion.php';
    $sql = "SELECT area.id, area.n_area FROM area";
    $resultado = mysqli_query($conexion,$sql);
    $row= $resultado->fetch_all(1);
    return json_encode($row);
}
