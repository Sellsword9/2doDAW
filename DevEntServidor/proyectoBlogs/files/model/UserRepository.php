<?php
class UserRepository{

    public static function checkLogin($u, $p){
        $bd=Conectar::conexion();
        $q="SELECT * FROM usuarios WHERE username='".$u."'";
        $result=$bd->query($q);
        if($datos=$result->fetch_assoc()){
            if($datos['PASSWORD']==md5($p)) //FIXME: Change to hash
                return new User($datos);
        }

    }

    public static function getUserById($id){
        $bd=Conectar::conexion();
        $q="SELECT * FROM users WHERE id='".$id."'";
        $result=$bd->query($q);
        if($datos=$result->fetch_assoc()){
            return new User($datos);
        }

    }
}


?>