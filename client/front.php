<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </head>
  <body>
    <button type="button" class="button">Retrieve data from api</button>
    
    <select class="select_area">
      <option value="">Todas</option>
      <option value="1">Escolar</option>
      <option value="2">Tecnica</option>
    </select>
    <select class="select_marca">
      <option value="">Todas</option>
      <option value="1">Bic</option>
      <option value="2">FaberCastell</option>
      <option value="3">Plantec</option>
    </select>
    <select class="select_categoria">
      <option value="">Todos</option>
      <option value="1">Lapices</option>
      <option value="2">Gomas</option>
    </select>

    <input type="search" name="search_bar" class="search_bar" placeholder="buscar...">
    <div id="datos" class="datos"></div>
  </body>
  <script type="text/javascript" src="js/main.js"></script>
</html>
