<?php
header('Access-Control-Allow-Origin: *');
include('dbcon.php');

session_start();
$a= $_SESSION['logintoken'];
echo json_encode(array("status"=>1, "msg"=>"asf"));
?>