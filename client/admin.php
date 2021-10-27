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
    <div class="container-fluid">
      <h2>Añadir producto</h2>
      <div class="container card">
        <div class="add_prod mt-4 mb-4">
          <form class="">
            <div class="row">
                <div class="col-6">
                  <input type="text" class="form-control" name="nombre" placeholder="nombre...">
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" name="descripcion" placeholder="descripcion...">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" name="precio" placeholder="precio...">
                </div>
                <div class="col-6">
                  <input type="file" class="form-control" name="foto">
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <select id="add_area" class="form-control add_area">
                    
                  </select>
                </div>
                <div class="col-6">
                  <select id="add_categoria" class="form-control add_categoria">
                    
                  </select>
                </div>
                <div class="col-12">
                  <br>
                </div>
                <div class="col-6">
                  <select id="add_marca" class="form-control add_marca">
                    
                  </select>
                </div>
                <div class="col-6">
                </div>  
                <div class="col-12">
                  <br>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary btn_cargar" value="añadir" name="añadir">Añadir</button>
                </div>                
            </div>
          </form>
        </div>
      </div>
      <h2>Modificar producto</h2>  
        <div class="row mb-2">
          <div class="col-3">Area:</div>
          <div class="col-3">Categoria:</div>
          <div class="col-3">Marca:</div>
          <div class="col-3">Buscar:</div>
          <div class="col-3">
            <select id="filter_area" class="form-control filter_area">
              <option value="">todas</option>
            </select>
          </div>
          <div class="col-3">
            <select id="filter_categoria" class="form-control filter_categoria">
              <option value="">todos</option>
            </select>
          </div>
          <div class="col-3">
            <select id="filter_marca" class="form-control filter_marca">
              <option value="">todas</option>
            </select>
          </div>
          <div class="col-3">
            <input type="text" class="form-control prod_search_bar" name="prod_search_bar">
          </div>
        </div>
        <div class="prod_list">
          <table id="prod_list" class="table table-striped table-hover prod_table">
          </table>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript" src="js/admin.js"></script>
</html>
