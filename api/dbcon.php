<?php
error_reporting(E_ERROR | E_PARSE);

$servername = "localhost";
$username = "root";
$password = "";
$database = "xpertcom_classes";

// Create connection
$con = new mysqli($servername, $username, $password, $database);

// Check connection
if ($con->connect_error) {
    echo "Connection Failed.";
}
else {
//    echo "Connected successfully";
}



// class Database {

//     public $servername = "localhost";
//     public $username = "root";
//     public $password = "";
//     public $database = "xpertcomputerclassess";
//     public $con;

//     public function getConnection(){
//         $this->con = null;

//         try {
//             $db = new mysqli($this->servername, $this->username, $this->password, $this->database);

//             if ($db->connect_error) {
//                 $this->con = "Connection Failed.";
//             }
//             else {
// //                $this->con = "Connected successfully";
//             }

//         }
//         catch(Exception $e) {
//             $this->con = "Connection error";
//         }

//         return $this->con;

//     }

// }

// $database = new Database();
// $db = $database->getConnection();



?>