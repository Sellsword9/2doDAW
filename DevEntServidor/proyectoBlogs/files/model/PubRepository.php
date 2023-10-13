<?php

    class PubRepository {

        public static function getPublicaciones(){
    
            $bd=Conectar::conexion();
            $q="SELECT * FROM publicaciones";
    
            $result=$bd->query($q);
            while($datos=$result->fetch_assoc()) {
                $pubs[]= new Publicacion($datos);
            }
            
            return $pubs;
    
        }

        public static function newPub($datos){
    
            $bd=Conectar::conexion();
            $q="INSERT INTO publicaciones VALUES ( NULL, '".$datos['titulo']."', '".$datos['texto']."', NOW() )";    
            $bd->query($q);
            return $bd->insert_id;
        }
    

    }
?>