<?php
class alerter {
    public static function alert($msg) {
        echo "<script type='text/javascript'>alert('$msg');</script>";
    }
}
?>