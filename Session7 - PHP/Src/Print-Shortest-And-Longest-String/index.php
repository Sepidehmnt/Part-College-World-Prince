<?php
$my_array = array("sdefsf","ghj","jj","erte","g","sssdf");
$new_array = array_map('strlen', $my_array);
echo "The shortest array length is: " .min($new_array).'<br>' . " The longest array is:  " .max($new_array);
?>