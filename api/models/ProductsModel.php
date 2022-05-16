<?php 
  class Product {
    // DB stuff
    private $conn;
    private $table = 'product';

    // Product Properties
    public $id;
    public $product_name;
    public $product_desc;
    public $product_price;
    public $product_qty;
    public $product_pic;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Product
    public function read() {
      // Create query
      $query = 'SELECt * FROM product';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single Keyboard
    public function read_single() {
          // Create query
      $query = 'SELECt * FROM Keyboard WHERE Keyboard.id = ? LIMIT 0,1';
          $queryB = '
               SELECT Keyboard.id, keeb_name, KeyboardBrand.brand as "keeb_brand", keeb_price, Switch.switch_name as "keeb_switch", Keycaps.keycaps_name as "keeb_keycaps", Connection.connection as "keeb_connection"
               FROM ' . $this->table . '
               LEFT JOIN
                Switch ON Keyboard.keeb_switch = Switch.id
               LEFT JOIN
                Keycaps ON Keyboard.keeb_keycaps = Keycaps.id
               LEFT JOIN
                KeyboardBrand ON Keyboard.keeb_brand = KeyboardBrand.id
               LEFT JOIN
                Connection ON Keyboard.keeb_connection = Connection.id 
               WHERE
                Keyboard.id = ?
               LIMIT 0,1
              ';
          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->keeb_name = $row['keeb_name'];
          $this->keeb_brand = $row['keeb_brand'];
          $this->keeb_price = $row['keeb_price'];
          $this->keeb_switch = $row['keeb_switch'];
          $this->keeb_keycaps = $row['keeb_keycaps'];
          $this->keeb_connection = $row['keeb_connection'];
    }

    // Create Keyboard
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET keeb_name = :keeb_name, keeb_brand = :keeb_brand, keeb_price = :keeb_price, keeb_switch = :keeb_switch, keeb_keycaps = :keeb_keycaps, keeb_connection = :keeb_connection';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->keeb_name = htmlspecialchars(strip_tags($this->keeb_name));
          $this->keeb_brand = htmlspecialchars(strip_tags($this->keeb_brand));
          $this->keeb_price = htmlspecialchars(strip_tags($this->keeb_price));
          $this->keeb_switch = htmlspecialchars(strip_tags($this->keeb_switch));
          $this->keeb_keycaps = htmlspecialchars(strip_tags($this->keeb_keycaps));
          $this->keeb_connection = htmlspecialchars(strip_tags($this->keeb_connection));

          // Bind data
          $stmt->bindParam(':keeb_name', $this->keeb_name);
          $stmt->bindParam(':keeb_brand', $this->keeb_brand);
          $stmt->bindParam(':keeb_price', $this->keeb_price);
          $stmt->bindParam(':keeb_switch', $this->keeb_switch);
          $stmt->bindParam(':keeb_keycaps', $this->keeb_keycaps);
          $stmt->bindParam(':keeb_connection', $this->keeb_connection);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Keyboard
    public function update() {
          // Update query
          $query = 'UPDATE ' . $this->table . ' SET keeb_name = :keeb_name, keeb_brand = :keeb_brand, keeb_price = :keeb_price, keeb_switch = :keeb_switch, keeb_keycaps = :keeb_keycaps, keeb_connection = :keeb_connection  WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->keeb_name = htmlspecialchars(strip_tags($this->keeb_name));
          $this->keeb_brand = htmlspecialchars(strip_tags($this->keeb_brand));
          $this->keeb_price = htmlspecialchars(strip_tags($this->keeb_price));
          $this->keeb_switch = htmlspecialchars(strip_tags($this->keeb_switch));
          $this->keeb_keycaps = htmlspecialchars(strip_tags($this->keeb_keycaps));
          $this->keeb_connection = htmlspecialchars(strip_tags($this->keeb_connection));
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':keeb_name', $this->keeb_name);
          $stmt->bindParam(':keeb_brand', $this->keeb_brand);
          $stmt->bindParam(':keeb_price', $this->keeb_price);
          $stmt->bindParam(':keeb_switch', $this->keeb_switch);
          $stmt->bindParam(':keeb_keycaps', $this->keeb_keycaps);
          $stmt->bindParam(':keeb_connection', $this->keeb_connection);
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete Post
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }
