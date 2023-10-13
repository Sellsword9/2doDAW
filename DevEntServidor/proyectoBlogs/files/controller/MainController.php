<?php
    require_once("model/PubRepository.php");
    require_once("model/UserRepository.php");
    // require_once("model/CommentRepository.php");
    // require_once("model/Comment.php");
    require_once("model/User.php");
    require_once("model/Publicacion.php");
    session_start();
    function showFeed()
    {
        $pubs = PubRepository::getPublicaciones();
        require_once("view/mainView.phtml");
    }
    if (isset($_GET['admin']))
    {
        require_once("controller/AdminController.php");
        die();
    }
    if (!empty($_POST) && empty($_GET['admin']))  // if post exists
    {
        if (isset($_POST['username'])  &&  isset($_POST['password']))
        {
            $tempUser = $_POST['username'];
            $tempPass = $_POST['password'];
            $user = UserRepository::checkLogin($tempUser, $tempPass);
            if ($user)
            {
                $_SESSION['user'] = $user;
                showFeed();
                die();
            }
            else
            {
                echo "<script>alert('Usuario o contraseña incorrectos')</script>";
                header("index.php");
                die();
            }
        }
        if (!empty($_GET['newPub']) && $_GET['newPub'] == 2)
        {
            if (isset($_POST['titulo']) && isset($_POST['texto'])) { 
                PubRepository::newPub($_POST);
                header("Location: index.php");
                die();
            }
        }
    }
    // If get exists 
    if (isset($_GET['register']))
    {
        require_once("view/register.phtml");
        die();
    }
    if (isset($_GET['newPub']))
    {
        require_once("view/newPub.phtml");
        die();
    }
    if (isset($_GET['logout']))
    {
        session_destroy();
        header("Location: index.php");
        die();
    }
    if (empty($_GET['guestMode']) && empty($_SESSION['user']))
    {
        require_once("view/login.phtml");
        die();
    }
    elseif (isset($_SESSION['user']) || isset($_GET['guestMode']))
    {
       showFeed();
       die();
    }





?>