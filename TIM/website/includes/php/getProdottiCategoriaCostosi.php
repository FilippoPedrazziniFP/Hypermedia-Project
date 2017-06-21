<?php
header("Access-Control-Allow-Origin: *");
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

$min = intval($_GET['min']);
$max = intval($_GET['max']);
$id = intval($_GET['id']);

$mysqli = new mysqli("localhost", "root", "", "my_timfmlhypermedia");

if (mysqli_connect_errno()) {
    echo "Error to connect to DBMS: ".mysqli_connect_error(); 
    exit();
}
else {

    if($id == 5){
       $query = " SELECT * FROM prodotti
       WHERE prodotti.prezzoprodotto >= '".$min."'
       AND prodotti.prezzoprodotto <= '".$max."'
       AND prodotti.promotionprodotto = 1 ORDER BY prodotti.idprodotto ASC  "; 
    }
    else{
        $query = " SELECT * FROM prodotti, categorieprodotti
        WHERE prodotti.idcategoria = categorieprodotti.idcategoria
        AND prodotti.prezzoprodotto >= '".$min."'
        AND prodotti.prezzoprodotto <= '".$max."'
        AND prodotti.idcategoria = '".$id."' ORDER BY prodotti.idprodotto ASC  ";
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

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}