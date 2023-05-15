<?php

$polacz = mysqli_connect('localhost', 'root', '', 'test');

/*if ($polacz -> connect_errno) {
    echo "Blad polaczenia " . $mysqli -> connect_error;
    exit();
}
else
{
    echo "Polaczono z baza";
}*/

if (isset($_POST["reg-nazwa"]))
{
    $reg_nazwa = $_POST["reg-nazwa"];
}
if (isset($_POST["reg-email"]))
{
    $reg_email = $_POST["reg-email"];
}
if (isset($_POST["reg-haslo"]))
{
    $reg_haslo = $_POST["reg-haslo"];
}

//echo ('Wprowadzone dane to : Nazwa=' . $reg_nazwa . ' Email=' . $reg_email . ' Haslo=' . $reg_haslo);

$wstawienie = "INSERT INTO uzytkownicy (nazwa, email, haslo) VALUES ('$reg_nazwa', '$reg_email', '$reg_haslo')";
$czyistnieje = "SELECT email FROM uzytkownicy WHERE email='$reg_email'";

if (mysqli_num_rows(mysqli_query($polacz, $czyistnieje)) > 0) 
{
    echo("Podany mail jest juz zarejestrowany.");
} 
else 
{
    if (mysqli_query($polacz, $wstawienie)) 
    {
        echo ("Pomyślnie zarejestrowano użytkownika.");
    } 
    else 
    {
        echo ("Nie można się zarejestrować.");
    }
}



mysqli_close($polacz);

?>

<form action="index.html">
    <p><input type="submit" value="Powrót na stronę logowania" /></p>
</form>