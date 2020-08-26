<?php
print_r($_SERVER);

function random($rand){

    $array = array ( '+','-','*');

    $num1 = rand(0, 10);
    $num2 = rand(0, 10);
    $symbol = $array[$rand];

    echo $symbol."<br>";
    if($symbol=='+'){
        echo $num1.'+'.$num2.'=';
        return $num1+$num2;
    }
    if($symbol=='-' && ($num1>$num2)){
        echo $num1.'-'.$num2.'=';
        return $num1-$num2;
    }
    if($symbol=='-' && ($num1<$num2)){
        echo $num2.'-'.$num1.'=';        
        return $num2-$num1;
    }
    if($symbol=='*'){
        echo $num1.'x'.$num2.'=';
        return $num1*$num2;
    }
    
}

$rand = rand(0,2);
echo random($rand);

?>