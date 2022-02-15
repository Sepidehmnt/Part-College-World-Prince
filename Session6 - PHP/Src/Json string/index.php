<?php

$JSON_code = '{"Title": "Animal Farm","Author": "George Orwell","Detail":
    {"Published at": "17 August 1945"}}';
$string = json_decode($JSON_code, true);
echo 'Title :' . $string["Title"] . '<br>';
echo 'Author :' . $string["Author"] . '<br>';
echo 'Published at :' . $string["Detail"]["Published at"];
