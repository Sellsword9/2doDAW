<?php
require_once("db.php");

$db = Conectar::conexion();
if(!empty($_POST['nombre']) && !empty($_POST['año']) && !empty($_POST['genero']))
{
    $nombre = $_POST['nombre'];
    $año = $_POST['año'];
    $genero = $_POST['genero'];
    $q = "INSERT INTO peliculas (nombre, anio, genero) VALUES ('$nombre', '$año', '$genero')";
    $resultado = $db->query($q);
    if (!$resultado) {
        echo "Error: " . $db->error . "\n";
        exit;
    }
}

$q="SELECT * FROM peliculas";
$resultado = $db->query($q);
if (!$resultado) {
    echo "Error: " . $db->error . "\n";
    exit;
}
echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Document</title>
</head>
<style>
  
</style>
<body>";
echo "<ul>";
while ($datos = $resultado->fetch_assoc()) {
    echo "<li>"."<ul>"."<h1>".$datos['nombre']."</h1>";
    echo "<li>".$datos['anio']."</li>";
    echo "<li>".$datos['genero']."</li>";
    echo "</ul>";
    echo "</li>";
}
echo "</ul>";
echo "<form action='clase2.php' method='post'>
    <input type='text' name='nombre' placeholder='Nombre de la película'>
    <input type='text' name='año' placeholder='Año de la película'>
    <input type='text' name='genero' placeholder='Género de la película'>
    <input type='submit' value='Enviar'>";
echo "</form>";
echo "</body>";
?>