<?php
$number = 5;  
$factorial = 1;

for ($i = 1; $i <= $number; $i++) 
{
    $factorial *= $i;
}

echo "The Factorial of $number is $factorial";
?>
