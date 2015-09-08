<?php
if($_POST){
    $convidado = $_POST['convidado'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
//    $acompanhantes = explode("\r\n", $_POST['acompanhantes']);
//    $acompanhantes = preg_split('/\r\n|[\r\n]/', $_POST['acompanhantes']);

    $acompanhantes = trim($_POST['acompanhantes']); // remove the last \n or whitespace character
    $acompanhantes = nl2br($acompanhantes); // replace \n with <br />

    $to = 'rsvp@horadobuque.com.br';
    // $to = 'ricardo.schalch@gmail.com';
    $subject = 'pedroepri.com - Mensagem de ' .$convidado;

    /*$headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
    $headers .= "CC: susan@example.com\r\n";*/

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = '<html><body>';
    $message .= '<h3>Confirmação de presença:</h3>';
    $message .= '<p>Convidado: '.$convidado.'</p>';
    $message .= '<p>Telefone: '.$telefone.'</p>';
    $message .= '<p>Email: '.$email.'</p>';
    $message .= '<p>Acompanhante(s):</p>';
    $message .= '<p>'.$acompanhantes.'</p>';
    $message .= '</body></html>';

    mail($to, $subject, $message, $headers);
}
?>