<?php
header('Access-Control-Allow-Origin: *');
include('dbcon.php');

    $sql = "select * from latest_blog where 1";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
           echo $a = json_encode($row);

    }

    $con->close();

?>