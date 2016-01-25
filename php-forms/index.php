<?php
//appID (this is their demo app ID from their web site)
$appId = '2de143494c0b295cca9337e1e96b00e0';

//weather API URL


//weather icon URLs
// http://openweathermap.org/img/w/{iconName}.png
require_once 'connection.php';
require_once 'models/zip-model.php';

$q = $_GET['q'];

$conn = getConnection();
$zipModel = new Zips($conn);
$query = $zipModel->search($q);

if (count($query) == 1) {
    $zip = $query[0]['zip'];
    $url = "http://api.openweathermap.org/data/2.5/weather?zip={$zip},us&units=imperial&appid={$appId}";
    $req = file_get_contents($url);
    $weatherData = json_decode($req);
    var_dump($req);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <link rel="icon" href="img/page-icon.png">
    <title>Weather</title>
    
    <!-- bootstrap css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

</head>
<body class="container">
    <?php 
    include 'views/search-form.php';
    include 'views/matches.php';
    ?>
    
    <h1>Current Weather</h1>
    <p><?= htmlentities($weatherData->main->temp) ?>&deg;F</p>
</body>
</html>