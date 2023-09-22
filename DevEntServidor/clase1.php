<html>
<body>
    <?php echo '<p>Hola Mundo</p>';  ?>
    <?php $helloworld = 'Hello World'; ?>
    <?php echo '<h1 style="color: red;">' . $helloworld . '</h1>'; ?>
    <?php 
    $arraytest[] = "FIRST ababsbasdb"; 
    $arraytest[] = "basadsasdadasd";
    $arraytest[] = "ababdb"; 
    $arraytest[] = "ba1213123d";
    $arraytest[] = "LAST";
    //$control = true;
    ?>
    <?php
       if($_GET['abc'] == 'cba')
       {
        echo '<p>Modo ABC</p>';
       } 
       else
        {
          echo '<p>Prueba ?abc=cba</p>';
        }
    ?>
    <?php if(!empty($control)) {
        echo '<p>Control es verdadero</p>';
    }
    else {
        echo '<p>Control es falso o no existe</p>';
    } ?>
    <?php
        for ($i = 0; $i < count($arraytest); $i++) {
            echo '<p style="color: blue;">' . $arraytest[$i] . '</p>';
        } 
    ?>
</body>
</html>