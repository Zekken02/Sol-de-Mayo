<?php 
include '../server/conexion.php';
$ID = $_REQUEST['id'];
$sql = "DELETE FROM `productos` WHERE id= $ID";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;