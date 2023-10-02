<?php
    class Cripto{
        public static function encriptar($pass){
            $hash = password_hash($pass, PASSWORD_BCRYPT);
            return $hash;
        }
        public static function comprobar($pass, $hash){
            return password_verify($pass, $hash);
        }
    }
?>