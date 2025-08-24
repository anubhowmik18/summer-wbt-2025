<?php
$letters = range('A', 'Z');
$letterIndex = 0;

for ($i = 1; $i <= 3; $i++)
 {
  
    for ($j = 1; $j <= $i; $j++) 
    {
        echo "*";
    }
    echo "\t";

    for ($k = 1; $k <= (4 - $i); $k++) 
        
    {
        echo $k . " ";
    }
    echo "\t"; 

    for ($m = 1; $m <= $i; $m++) 
    {
        echo $letters[$letterIndex++] . " ";
    }

    echo "<br>";
}
?>
