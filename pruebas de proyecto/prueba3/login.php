<?php
// when the post of the form is set,
// send to the database the data of the form,
// creating a new user unless the username already exists
require_once("db.php");

$db = Conectar::conexion();
if ($db->connect_error) {
    echo "Fallo al conectar a MySQL: " . $db->connect_error;
    exit;
}
$q = "SELECT * FROM user_data WHERE username = '".$_POST['username']."'";
$resultado = $db->query($q);
if (!isset($_POST['username']) && isset($_POST['password']) && $resultado = $db->query($q)) {
    if ($resultado->num_rows > 0) {
        echo "El usuario ya existe";
    }
}
else{
    
    $q = "INSERT INTO user_data (username, pwd) VALUES 
    ('".$_POST['username']."', '".$_POST['password']."')";
    $resultado = $db->query($q);
    
}

