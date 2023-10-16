<?php
    require_once("model/Comment.php");
    class CommentRepository {
        public static function getCommentsOfPub($id) {
            $bd = Conectar::conexion();
            $q = "SELECT * FROM comentarios WHERE id_pub = " . $id;
            $result = $bd->query($q);
            $com = [];
            while($datos = $result->fetch_assoc()) {
                $com[] = new Comment($datos);
            }
            return $com;
        }
    }

?>