<!DOCTYPE html>
<html lang="es">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
    <script src="https://kit.fontawesome.com/aa00e73738.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </head>
  <body>
    <?php include 'navbar.php' ?>
    <div id="filtros" class="filtros">
      <!--========== INPUTS PARA AREA DE PRODUCTO ============-->
      <div id="filter_area" class="filter_area">
        <input type="radio" value="" name="area" class="select_area" id="area0" checked="checked">
        <label for="area0">Todas</label>
      </div>

      <!--========== INPUTS PARA CATEGORIA DE PRODUCTO ============-->
      <div id="filter_categoria" class="filter_categoria">
        <input type="radio" value="" name="categoria" class="select_categoria" id="categoria0" checked="checked">
        <label for="categoria0">Todas</label>
      </div>

      <!--========== INPUTS PARA MARCA DE PRODUCTO ============-->
      <div id="filter_marca" class="filter_marca">
        <input type="radio" value="" name="marca" class="select_marca" id="marca0" checked="checked">
        <label for="marca0">Todas</label>
      </div>

      <!--========== INPUT BARRA DE BUSQUEDA ============-->
      <input type="search" name="search_bar" class="search_bar" placeholder="buscar...">
    </div>
    <!--========== DIV QUE CONTIENE LAS TARJETAS ============-->
    <div id="datos" class="datos"></div>
  </body>
  <script type="text/javascript" src="js/productos.js"></script>
</html>
