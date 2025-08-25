<?php
$year=2018;
if($year % 400==0 && $year % 100 !==0 || $year % 4 ==0)
{
    echo "This year is an leap year";
}
else
{
    echo "This year is not a leap year";
}
?>