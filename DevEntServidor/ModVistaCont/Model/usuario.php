<?php
    class Usuario {
        private $user = "";
        private $rol = 0;

        public function __construct($u, $r) {
            $this->user = $u;
            $this->rol = $r;
        }
    }
?>