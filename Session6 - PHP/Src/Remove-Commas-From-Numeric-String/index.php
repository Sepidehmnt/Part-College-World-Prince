<?php
$str = "2,543.12";

$str2 = str_replace(',', '', $str);
if (is_numeric($str2)) {
    echo $str2 . "\n";
}
