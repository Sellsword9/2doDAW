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
function goBackFail() {
    header("Location: ".$_SERVER['HTTP_REFERER']);
    
    exit;
}
function goBackLoginSuccess() {
    header("Location: ".$_SERVER['HTTP_REFERER']);
    
    exit;
}
function goBackCreated() {
    header("Location: ".$_SERVER['HTTP_REFERER']);
    exit;
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $q = "SELECT * FROM user_data WHERE username = '".$_POST['username']."'";
    $resultado = $db->query($q);
    if ($resultado->num_rows > 0) {
       $q = "Select * FROM user_data WHERE username = '".$_POST['username']."' AND password = '".$_POST['password']."'";
       if ($resultado = $db->query($q)) {
           if ($resultado->num_rows > 0) {
                
                goBackLoginSuccess();
           }
           else {
               goBackFail();
           }
       }
    }
    else{
        $q = "INSERT INTO user_data (username, password) VALUES 
    ('".$_POST['username']."', '".$_POST['password']."')";
    $resultado = $db->query($q);
    echo "Usuario creado";
    goBackCreated();
    }
}
?>

