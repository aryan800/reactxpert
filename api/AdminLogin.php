<?php
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

include('dbcon.php');

if(isset($_POST)){

 $username = mysqli_real_escape_string($con, test_input($_POST['uname']));
 $pwd = mysqli_real_escape_string($con, test_input($_POST['pwd']));

    if($username == "" || $pwd == "")
    {
      echo json_encode(array("status"=>0, "msg"=>"Please fill all fields."));
    }
    else {

      $simple_string = "$username";
      $ciphering = "AES-128-CTR"; 
      $iv_length = openssl_cipher_iv_length($ciphering); 
      $options = 0;
      $encryption_iv = '1508987654123056';
      $encryption_key = "HiHellowHowareyou";
      $encrypted = openssl_encrypt($simple_string, $ciphering,$encryption_key, $options, $encryption_iv);

      $stmt = $con->prepare("SELECT * from admin where username = ? and password = ? ");
      $stmt->bind_param("ss", $username, $pwd);
      $stmt->execute();
      $stmt->store_result();
      $count = $stmt->num_rows;
      if($count === 1){
        echo json_encode(array("status"=>1, "msg"=>"$encrypted"));
      }
      else {
        echo json_encode(array("status"=>0, "msg"=>"Record not found."));
      }

      $stmt->close();

    }

}
else {
  echo json_encode(array("status"=>0, "msg"=>"Something went wrong."));
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = strip_tags($data);
    $data = htmlspecialchars($data);

    return $data;
  }

$con->close();

?>