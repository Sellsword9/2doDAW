<?php

class Publicacion {
    private $title ="";
    private $text ="";
    private $date = NULL; // new DateTime();
    private $comments;
    private $id;

    public function __construct($data)
    {
        $this->title = $data['titulo'];
        $this->text = $data['texto'];
        if (isset($data['fecha']))
        {
            $this->date = $data['fecha'];
        }
        $this->id = $data['id'];
    }

    public function getText(){
        return $this->text;
    }
    public function getTitle(){
        return $this->title;
    }
    public function getId(){
        return $this->id;
    }
    
    public function setText($t){
        $this->text=$t;
    }

}

?>