<?php
header("Access-Control-Allow-Origin: *");
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

$id = intval($_GET['id']);
$mysqli = new mysqli("localhost", "root", "", "my_timfmlhypermedia");

if (mysqli_connect_errno()) {
    echo "Error to connect to DBMS: ".mysqli_connect_error();
    exit();
}
else {
    
    if($id == 5){
        $query = "  SELECT * FROM smartlife 
                WHERE smartlife.promotionsmartlife = 1 
                ORDER BY smartlife.idsmartlife ASC  ";  
    }
    else{
        $query = "  SELECT * FROM smartlife, categoriesmartlife 
                WHERE smartlife.idcategoria = categoriesmartlife.idcategoria 
                AND smartlife.idcategoria = '".$id."' ORDER BY smartlife.idsmartlife ASC  ";
    }

    $result = $mysqli->query($query);
    
    if($result->num_rows >0)
    {
        $myArray = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }

    $result->close();
    $mysqli->close();
}