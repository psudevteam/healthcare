<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/config.php';
  include_once '../../models/ProductsModel.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate Product data object
  $data = new Product($db);

  // Product data query
  $result = $data->read();

  // Get row count
  $num = $result->rowCount();

  // Check if any data
  if($num > 0) {

    // data array
    $datas_arr = array();

    // $datas_arr['data'] = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $data_item = array(
        'id' => $id,
        'name' => $name,
        'price' => $price,
        'desc' => $desc,
        'pic' => $pic,
        'qty' => $qty,
      );

      // Push to "data"
      array_push($datas_arr, $data_item);
      // array_push($datas_arr['data'], $data_item);
    }

    // Turn to JSON & output
    echo json_encode($datas_arr);

  } else {
    // No datas
    echo json_encode(
      array('message' => 'No datas Found')
    );
  }
