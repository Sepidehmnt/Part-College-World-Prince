<?php
$t = strtotime('next sunday');
echo ($t . "<br>");
echo ('This is next sunday: ' . date("Y-m-d", $t));
