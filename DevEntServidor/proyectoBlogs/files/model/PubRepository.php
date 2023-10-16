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

        public static function search($words)
        {
            $bd=Conectar::conexion();
            $q="SELECT * FROM publicaciones WHERE ID in 
            (SELECT id_Pub FROM comentarios where texto LIKE '%".$words."%') or 
            titulo LIKE '%".$words."%' OR texto LIKE '%".$words."%'";
            $result=$bd->query($q);
            $p=[];
            while($datos=$result->fetch_assoc()) {
                $p[]= new Publicacion($datos);
            }
            return $p;
        }
    

    }
?>