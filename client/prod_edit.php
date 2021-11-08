<?php 

include "../server/conexion.php";

$id_prod=$_REQUEST["id_prod"];
$nombre_prod=$_REQUEST["nombre_prod"];
$descripcion_prod=$_REQUEST["descripcion_prod"];
$precio_prod = $_REQUEST["precio_prod"];
// $foto_prod=$_REQUEST["foto_prod"];
$area_prod = $_REQUEST["area_prod"];
$categoria_prod = $_REQUEST["categoria_prod"];
$marca_prod=$_REQUEST["marca_prod"];

$foto_prod= "";
$proveedor_prod= 1;
$stock_prod= 1;

$sql = "UPDATE `productos` SET nombre = '$nombre_prod' , descripcion = '$descripcion_prod' , foto = '$foto_prod' , precio = '$precio_prod' , stock = '$stock_prod' , id_proveedor = '$proveedor_prod' , id_categoria = '$categoria_prod', id_marca = '$marca_prod', id_area = '$area_prod' where `id`='$id_prod'";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;