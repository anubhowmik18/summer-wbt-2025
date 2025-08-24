<?php
$arr = array(10, 25, 30, 45, 50);
$search = 30;
$found = false;

for ($i = 0; $i < count($arr); $i++) 
{
    if ($arr[$i] == $search) 
    {
        $found = true;
        break;
    }
}

if ($found) 
{
    echo "$search is found in the array.";
} 
else 
{
    echo "$search is not found in the array.";
}
?>
