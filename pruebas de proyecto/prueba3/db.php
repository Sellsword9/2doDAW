<?php
class Conectar{
    public static function conexion(){
        $conexion = new mysqli("localhost", "root", "", "prueba3");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
} ?>