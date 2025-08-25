<?php
for ($i = 5; $i >= 1; $i--) 
{
    for ($j = 1; $j <= $i; $j++) 
    {
        echo "*";
    }
    echo "<br>";
}

for ($i = 1; $i <= 4; $i++) 
{
    for ($j = 1; $j <= $i; $j++) 
    {
        echo $j . " ";
    }
    echo "<br>";
}

$character = 'A';
for ($i = 1; $i <= 4; $i++) 
{
    for ($j = 1; $j <= $i; $j++) 
    {
        echo $character . " ";
    }
    echo "<br>";
    $character++;
}
?>