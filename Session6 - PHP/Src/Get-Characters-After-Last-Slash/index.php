<?php
$my_url = 'http://WWW.example.com/5478631';

echo substr($my_url, strrpos($my_url, '/') + 1) . '<br>';
