<?php
//These are the defined authentication environment in the db service

// The MySQL service named in the docker-compose.yml.
$host = 'healthcare-db';

// Database use name
$user = 'admin';
echo getenv('SHELL');
foreach (getenv() as $key => $value) {
    echo $key . ' - ' . $value;
}


//database user password
$pass = 'admin';

// check the MySQL connection status
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to MySQL server successfully!";
}
?>