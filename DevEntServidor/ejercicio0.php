<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    a{
        color: red;
        font-size: 80px;
    }
</style>
<body>
<?php
    if(!empty($_GET['control']))
    {
        if ($_GET['control'] == 1)
        {
            echo '<p>TEXTO DEL ESTADO 1<p>';
            echo '<img src="" alt="imagen">';
        }
        else if ($_GET['control'] == 2)
        {
            echo 'TEXTO DEL ESTADO 2';
        }
        else if ($_GET['control'] == 3)
        {
            echo 'TEXTO DEL ESTADO 3';
            if(!empty($_GET['mult']))
            {
                for ($i=0; $i < 11; $i++) { 
                    echo '<p>'.$_GET["mult"].' x '.$i. ' = '. $i * $_GET["mult"].'</p>';
                }
            }
            else
            {
                for ($i=0; $i < 11; $i++) { 
                    echo '<p>'.'1 x '.$i. ' = '. ($i * 1).'</p>';
                }
            }
        }
    }
    else
    {
        echo '<a href="ejercicio0.php?control=1">Estado 1</a><br><br>';
        echo '<a href="ejercicio0.php?control=2">Estado 2</a><br><br>';
        echo '<a href="ejercicio0.php?control=3">Estado 3</a>';
    }

?>
</body>
</html> 