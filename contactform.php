<?php

if (isset($_POST['submit'])) {
    $mailFrom = $_POST['mail'];

    $mailTo = "support@gave-listen.dk";
    $headers = "From: ".$mailFrom;
    $txt = "Vil gerne have nulstillet sin adgangskode til gave-listen.dk til ".$mailFrom;

    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
}