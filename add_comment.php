<?php
	$servername = "localhost";
	$username   = "username";
	$password   = "password";
	$dbname     = "livro";

	if($_POST) {
		$nome = $_POST['nome'];
		$mensagem  = stripslashes($_POST['mensagem']);
	}

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$conn->exec("SET CHARACTER SET utf8");
		$stmt = $conn->prepare("INSERT INTO mensagens (nome, msg, data) VALUES (:nome, :msg, now())");
		$stmt->bindParam(':nome', $nome);
		$stmt->bindParam(':msg', $mensagem);
		if ($stmt->execute()) {
			echo utf8_encode("A sua mensagem foi enviada! Obrigado pelo carinho!");
		}

	} catch (PDOException $e) {
		echo "Error: " . $e->getMessage();
	}
	$conn = null;