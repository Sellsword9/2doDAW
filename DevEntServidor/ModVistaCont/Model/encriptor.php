<?php
    class Encriptor {
        public static function encriptar($p) {
            return password_hash($p, PASSWORD_BCRYPT);
        }
    }
?>