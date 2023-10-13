<?php
    require_once("Model/usuario.php");
    require_once("Model/publicacion.php");
    require_once("Model/publicacionRepository.php");
    require_once("Model/usuarioRepository.php");

    session_start();

    $pubs = PublicacionRepository::getPublicaciones();

    if (isset($_SESSION["logged"]) && $_SESSION["logged"]) {
        include("View/mainView.phtml");
    }
    if (isset($_GET["logout"])) {
        $_SESSION["logged"] = false;
        $_Session["user"] = new Usuario("", 0);
        header("Location: index.php");
    }

    if (isset($_POST["user"]) && isset($_POST["password"])) {
        if ($user = usuarioRepository::validateUser($_POST)) {
            $_SESSION["user"] = $user;
            $_SESSION["logged"] = true;
            include ("View/mainView.phtml");

        } else {
           // contraseña incorrecta
        }
    }else
    {
        include("View/login.phtml");
    }
?>