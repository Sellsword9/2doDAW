<?php
class User{
    private $id, $username, $rol;

    public function __construct($datos){
        $this->id=$datos['id'];
        $this->username=$datos['username'];
        $this->rol=$datos['rol'];
    }
    public function getUsername(){
        return $this->username;
    }
    public function getRol(){
        return $this->rol;
    }
}

?>