<?php
	require_once("model/CommentRepository.php");
	if (isset($_GET['seePub'])) {
		$id = $_GET['seePub'];
		$q = "SELECT * FROM publicaciones WHERE id = " . $id;
		$db = Conectar::conexion();
		$result = $db->query($q);
		$data = $result->fetch_assoc();
		$ViewPub = new Publicacion($data);
		$comments = CommentRepository::getCommentsOfPub($id);
		require_once("view/pubView.phtml");
		die();
	}
?>