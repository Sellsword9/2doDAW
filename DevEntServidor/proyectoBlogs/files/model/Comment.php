<?php

    class Comment {
        private $text;
        private $autor;
        private $comid;
        private $pubid;
        public function __construct($data) {
            $this->text = $data['texto'];
            $this->autor = $data['autor'];
            $this->comid = $data['com_id'];
            $this->pubid = $data['id_Pub'];
        }
        public function getText() {
            return $this->text;
        }
        public function getAutor() {
            return $this->autor;
        }
        public function getComid() {
            return $this->comid;
        }
        public function getPubid() {
            return $this->pubid;
        }
    }

?>