<?php
	$servername = "localhost";
	$username   = "pedroepr_rbs";
	$password   = "ironmaiden2014";
	$dbname     = "pedroepr_livro";
?>

<link rel="stylesheet" href="css/livro.css?<?php echo date('l jS \of F Y h:i:s A'); ?>">
<div id="title" class="row">Guestbook</div>
<div id="contents" class="row">
	<div class="col-md-4">
		<div class="msgstitle">Send us your message:</div>
		<form action="email.php" class="form">
			<div class="form-group">
				<label class="control-label" for="nome">Full name:</label>
				<input id="nome" class="form-control" name="nome" type="text">
			</div>
			<div class="form-group">
				<label class="control-label" for="textarea">Message:</label>
				<textarea type="text" class="form-control" id="textarea" maxlength="600"></textarea>
			</div>
			<div id="btn" type="submit" class="pull-right">
				<img id="sendbtn" src="img/button.png">
			</div>
			<br>
		</form>
	</div>
	<div id="mensagem" class="col-md-8">

		<div class="msgstitle">Messages</div>
		<?php
			try {
				$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$stmt = $conn->prepare("SELECT * FROM mensagens ORDER BY id DESC");
				$stmt->execute();

				// set the resulting array to associative
				$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
				$result = $stmt->fetchAll();

				foreach ($result as $row) {
//					echo  . ' - ' . $row['msg'] . ' - ' . $row['data'] . '<br />';
					$unit = '<div class="unit">';
					$unit .= '<div class="title">' . htmlentities($row['nome']) . '</div>';
					$unit .= '<div class="data">' . implode("/", array_reverse(explode("-", $row['data']))) . '</div>';
					$unit .= '<div class="msg">' . htmlentities($row['msg']) . '</div>';
					$unit .= '</div>';
					echo $unit;
				}

			} catch (PDOException $e) {
				echo "Error: " . $e->getMessage();
			}
			$conn = null;
		?>

	</div>
</div>