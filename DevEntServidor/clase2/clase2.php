<?php
require_once("db.php");

$db = Conectar::conexion();

$q="SELECT * FROM peliculas";
$resultado = $db->query($q);
if (!$resultado) {
    echo "Error: " . $db->error . "\n";
    exit;
}
while ($datos = $resultado->fetch_assoc()) {
    echo $datos['nombre'] . "<br>";
}
?>