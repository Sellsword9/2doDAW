<?php
    class Publicacion {
        private $titulo = "";
        private $texto = "";
        private $fecha = null;
        private $id = 0;

        public function __construct($datos) {
            $this->titulo = $datos["titulo"];
            $this->texto = $datos["texto"];
            $this->fecha = $datos["fecha"];
            $this->id = $datos["id"];
        }

        public function getTitulo() {
            return $this->titulo;
        }
        public function getTexto() {
            return $this->texto;
        }
    }
?>