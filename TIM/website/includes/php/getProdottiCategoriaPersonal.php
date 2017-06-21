<?php
header("Access-Control-Allow-Origin: *");
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

$pers = intval($_GET['pers']);
$id = intval($_GET['id']);

$mysqli = new mysqli("localhost", "root", "", "my_timfmlhypermedia");

if (mysqli_connect_errno()) {
    echo "Error to connect to DBMS: ".mysqli_connect_error(); 
    exit();
}
else {
    
switch($pers) {
    case(1):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.promotionprodotto = 1 ORDER BY prodotti.prezzoprodotto ASC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' ORDER BY prodotti.prezzoprodotto ASC";
        }
        break;
    case(2):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.promotionprodotto = 1 ORDER BY prodotti.prezzoprodotto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
                WHERE prodotti.idcategoria = categorieprodotti.idcategoria
                AND prodotti.idcategoria = '".$id."' ORDER BY prodotti.prezzoprodotto DESC";
        }
        break;
    case(3):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.promotionprodotto = 1 ORDER BY prodotti.popolarita DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' ORDER BY prodotti.popolarita DESC";
        }
        break;
    case(4):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.promotionprodotto = 1 ORDER BY prodotti.voto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' ORDER BY prodotti.voto DESC";
        }
        break;
    case(5):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.marca = 'Apple' AND prodotti.promotionprodotto = 1 ORDER BY prodotti.voto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' AND prodotti.marca = 'Apple' ORDER BY prodotti.voto DESC";
        }
        break;
    case(6):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.marca = 'Samsung' AND prodotti.promotionprodotto = 1 ORDER BY prodotti.voto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' AND prodotti.marca = 'Samsung' ORDER BY prodotti.voto DESC";
        }
        break;
    case(7):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.marca = 'Alcatel' AND prodotti.promotionprodotto = 1 ORDER BY prodotti.voto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' AND prodotti.marca = 'Alcatel' ORDER BY prodotti.voto DESC";
        }
        break;
    case(8):
        if($id == 5){
            $query = " SELECT * FROM prodotti
                WHERE prodotti.marca = 'Asus' AND prodotti.promotionprodotto = 1 ORDER BY prodotti.voto DESC"; 
        }
        else{
            $query = " SELECT * FROM prodotti, categorieprodotti
            WHERE prodotti.idcategoria = categorieprodotti.idcategoria
            AND prodotti.idcategoria = '".$id."' AND prodotti.marca = 'Asus' ORDER BY prodotti.voto DESC";
        }
        break;
    default:
        break;
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