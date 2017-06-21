<?php
header("Access-Control-Allow-Origin: *");
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

$id = intval($_GET['id']);

$mysqli = new mysqli("localhost", "root", "", "my_timfmlhypermedia");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error();
    exit();
}
else {
    $query ="SELECT * FROM assistenza WHERE assistenza.idassistenza = '".$id."'";

    $result = $mysqli->query($query);

    if($result->num_rows >0)
    {
        $row = $result->fetch_array(MYSQL_ASSOC);
        $myObject = array_map('utf8_encode', $row);
     
        echo json_encode($myObject);
    }

    $result->close();

    $mysqli->close();
}