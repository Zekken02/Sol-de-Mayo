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

$sql = "INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `foto`, `precio`, `stock`, `id_proveedor`, `id_categoria`, `id_marca`, `id_area`) VALUES (NULL, '$nombre_prod', '$descripcion_prod', '$foto_prod', '$precio_prod', '$stock_prod', '$proveedor_prod', '$categoria_prod', '$marca_prod', '$area_prod')";

mysqli_query($conexion,$sql);

header("Location: admin.php");

exit;