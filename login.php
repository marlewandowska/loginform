<?php

$polacz = mysqli_connect('localhost', 'root', '', 'test');

if (isset($_POST["log-email"]))
{
    $log_email = $_POST["log-email"];
}
if (isset($_POST["log-haslo"]))
{
    $log_haslo = $_POST["log-haslo"];
}


$czymailjest = "SELECT email FROM uzytkownicy WHERE email='$log_email'";
$czyhaslook = "SELECT email, haslo FROM uzytkownicy WHERE email='$log_email' AND haslo='$log_haslo'";

if (mysqli_num_rows(mysqli_query($polacz, $czymailjest)) > 0)
{
    if (mysqli_num_rows(mysqli_query($polacz, $czyhaslook)) > 0)
    {
        echo ("Pomyślnie zalogowano.");
    }
    else
    {
        echo ("Haslo jest niepoprawne.");
    }
}
else
{
    echo ("Podany email nie jest zarejestrowany.");
}



mysqli_close($polacz);

?>