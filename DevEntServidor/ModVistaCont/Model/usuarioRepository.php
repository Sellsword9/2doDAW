<?php
    require_once("db.php");
    require_once("usuario.php");
    class usuarioRepository {
        public static function validateUser($data)
        {
            $user = $data["user"];
            $p = $data["password"];
            $q = "SELECT * FROM usuarios WHERE username = '$user'";
            $db = Conectar::conexion();
            $result = $db->query($q);
            if ($datos = $result->fetch_assoc()){
            if (password_verify($p, $datos["PASSWORD"]))
            {
                return new Usuario($user, 1);
            }
            }else {
                return false;
            }
        }
    }
?>