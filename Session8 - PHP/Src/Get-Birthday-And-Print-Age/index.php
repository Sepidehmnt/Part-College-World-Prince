<?php
$birhday = date_create('20.12.1996');
$today = date_create('now');
$result = date_diff($birhday, $today);
echo $result->format('%Y years, %M months and %d days');
