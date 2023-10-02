<?php
    require_once("publicacion.php");
    class PublicacionRepository{
        public static function getPublicaciones(){
            $q = "SELECT * FROM publicaciones";
            $db = Conectar::conexion();
            $result = $db->query($q);
            while($datos = $result->fetch_assoc()){
                $publicaciones[] = new Publicacion($datos);
            }
            return $publicaciones;
        }
    }
?>