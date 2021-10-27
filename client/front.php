<!DOCTYPE html>
<html lang="es">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </head>
  <body>
    <div id="filtros" class="filtros">
      <!--========== SELECT PARA AREA DE PRODUCTO ============-->
      <div id="filter_area" class="filter_area">
        <input type="radio" value="" name="area" class="select_area" id="area0" checked="checked">
        <label for="area0">Todas</label>
      </div>

      <!--========== SELECT PARA MARCA DE PRODUCTO ============-->
      <select class="select_marca">
        <option value="">Todas</option>
        <option value="1">Bic</option>
        <option value="2">FaberCastell</option>
        <option value="3">Plantec</option>
      </select>

      <!--========== SELECT PARA CATEGORIA DE PRODUCTO ============-->
      <select class="select_categoria">
        <option value="">Todos</option>
        <option value="1">Lapices</option>
        <option value="2">Gomas</option>
      </select>

      <!--========== INPUT BARRA DE BUSQUEDA ============-->
      <input type="search" name="search_bar" class="search_bar" placeholder="buscar...">
    </div>
    <!--========== DIV QUE CONTIENE LAS TARJETAS ============-->
    <div id="datos" class="datos"></div>
  </body>
  <script type="text/javascript" src="js/main.js"></script>
</html>
