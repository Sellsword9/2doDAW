<?php
session_start();
require_once("db.php");
require_once("alerter.php");
require_once("crypto.php");
$db = Conectar::conexion();
$alerter = alerter::alert($msg);
$encripter = crypto::encriptar();

if (isset($_POST['username']) && isset($_POST['password'])) {
    $user = $_POST['username'];  
    $pass = $encripter($_POST['password']);

    $q = "select * from usuarios where username = '$user'";
    $result = $db->query($q);
    if ($result) {
       $alerter("El usuario ya existe");
    }
    else {
        $q = "insert into usuarios (username, password) values ('$user', '$pass')";
        $db->query($q);
        $alerter("Usuario creado correctamente");
        $_SESSION['logged'] = true;
        sleep(2);
        header("Location: home.html");
    }
}
// else {
//     $alerter("Algo ha ido mal");
//     sleep(2);
//     header("Location: index.php");
// }

?>