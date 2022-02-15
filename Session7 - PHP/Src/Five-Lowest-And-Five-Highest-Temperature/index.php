<?php
$temperature_array = [
    '62', '62', '74', '65', '72', '73', '62', '68', '73', '76', '75',
    '63', '76', '64', '66', '85', '73', '68', '71', '68', '62', '60', '78', '73', '79', '75', '73', '68', '64', '65'
];
$tot_temp = 0;
$temp_array_length = count($temperature_array);
foreach ($temperature_array as $temp) {
    $tot_temp += $temp;
}
echo count($temperature_array) . '<br>';
$avg_temperature = $tot_temp / $temp_array_length;
echo "Average temperature is : " . $avg_temperature . "<br/> ";
sort($temperature_array);
echo "List of five lowest temperatures :<br/> ";
for ($i = 0; $i < 5; $i++) {
    echo $temperature_array[$i] . "<br/> ";
}
echo "List of five highest temperatures : <br/>";
for ($i = ($temp_array_length - 5); $i < ($temp_array_length); $i++) {
    echo $temperature_array[$i] . "<br/>";
}
