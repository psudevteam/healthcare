<?php 
  class Database {

    private $host = 'healthcare-db';
    private $db_name = 'healthcare';
    private $username = 'root';
    private $password = 'toor';
    private $port = 9906;
    private $conn;

    public function connect() {

      $this->conn = null;

      try {

        $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      } catch(PDOException $e) {

        echo 'Connection Error: ' . $e->getMessage();

      }

      return $this->conn;
    }
  }
