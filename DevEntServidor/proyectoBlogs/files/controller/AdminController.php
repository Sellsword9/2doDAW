<?php
    require_once("model/PubRepository.php");
    if (isset($_GET['admin']) && isset($_GET['deleteuser']))
    {
        if (isset($_SESSION['user']) && ($_SESSION['user']->getRol()) > 1)
        {
            $id = $_GET['deleteuser'];
            $q = "DELETE FROM usuarios WHERE id = " .$id.";"; 
            $bd=Conectar::conexion();
            $result=$bd->query($q);
            header("Location: index.php?admin=1&usermode=true");
            die();
        }
    }

    if (isset($_GET['editdone']) && !empty($_POST))
    {
        if (isset($_SESSION['user']) && ($_SESSION['user']->getRol()) > 1)
        {
            $ti = $_POST['titulo'];
            $te = $_POST['texto'];
            $id = $_GET['editdone'];
            $q = "UPDATE publicaciones SET titulo = '$ti', texto = '$te' WHERE id = " .$id.";";
            $bd=Conectar::conexion();
            $result=$bd->query($q);
            header("Location: index.php?admin=1");
            die();
        }
    }
    
    if (isset($_GET['admin']) && isset($_GET['usermode']))
    {
        if (isset($_SESSION['user']) && ($_SESSION['user']->getRol()) > 1)
        {
            require_once("view/adminUsers.phtml");
            die();
        }
    }
    
    if (isset($_GET['admin']) && empty($_GET['editid']))
    {
       if (isset($_SESSION['user']) && ($_SESSION['user']->getRol()) > 1)
       {
           $pubs = PubRepository::getPublicaciones();
           require_once("view/adminView.phtml");
           die();
       }

    }

    if (isset($_GET['editid']))
    {
        if (isset($_SESSION['user']) && ($_SESSION['user']->getRol()) > 1)
        {
            $q = "SELECT * FROM publicaciones WHERE id = " . $_GET['editid'].";";
            $bd=Conectar::conexion();
            $result=$bd->query($q);
            $editdata=$result->fetch_assoc();
            require_once("view/adminEdit.phtml");
            die();
        }
    }


?>