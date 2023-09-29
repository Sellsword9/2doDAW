<?php
class Conectar{
    public static function conexion(){
        $conexion = new mysqli("localhost", "root", "", "peli2");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}