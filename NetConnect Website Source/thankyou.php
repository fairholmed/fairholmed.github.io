<?php
    
$name = $_REQUEST['name'];
$tel = $_REQUEST['telephone'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$comments = $_REQUEST['message'];
$type = $_REQUEST['type'];

$spam= eregi('href', $comments);
$spamb = eregi('url', $comments);
$spamc = $spam+ $spamb;

if ($spamc == 0){
$headers .= "From: donotreply@5App.com\n";  // your email client will show the person's email address like normal
$headers .= "Content-Type: text/plain; charset=iso-8859-1\n"; // sets the mime type
$recipient = "hello@5App.com"; // enter YOUR email address here
$subject = "5App Contact Form"; // this is the subject of the email

$msg = "Contact Type: " .$type. "\n Name: ".$name. "\n Telephone Number: ".$tel. "\n Email: ".$email."\n Company: ".$company."\n Comments: ".$comments."\n\n Spam: ".$spamc."\n Powered By Advanta Internet\n";

mail($recipient, $subject, $msg, $headers); // the mail() function sends the message to you
}


//Once the data is entered, redirect the user to give them visual confirmation
  echo "<script>document.location.href='thankyou.html'</script>";
?>
