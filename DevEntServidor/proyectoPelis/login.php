<?php
    session_start();
    require_once("db.php");
    require_once("alert.php");
    require_once("crypto.php");
    $db = Conectar::conexion();
    $alerter = aleter::alert();
    /**
     * Securer es una variable que se usa para comprobar si la contraseña es correcta
     */
    $securer = Cripto::comprobar();


    function DoLogin($id) {
       $_SESSION[logged] = true;
       $_SESSION[id] = $id;
    }
    function TryLogin($username, $password, $db) {
        $q = "SELECT * FROM usuarios WHERE username = '$username'";
        $result = db->query($q);
        if ($result) {
            $row = $result->fetch_assoc();
            if ($securer($password, $row['password'])) {
                DoLogin($row['id']);
                return true;
            }
            else {
                return false;
            }
        }else{
            return 0;
        }
        
    }
    
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $user = $_POST['username'];
        $pass= $_POST['password'];  
        if (TryLogin($user, $pass, $db)) {
            header("Location: home.html");
        }
        else {
            alerter.alert("Usuario o contraseña incorrectos");
            sleep(2);
            header("Location: index.php");
        }
    }
    else {
        alerter.alert("Algo ha ido mal");
        sleep(2);
        header("Location: index.php");
    }
?>
