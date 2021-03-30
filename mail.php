<?php

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);

$URL ='https://api.getresponse.com/v3/from-fields';
$token = 'api-key ea6qdvnwbg9s5eajs05dqossag3tja7n';
$header[] = "x-auth-token: $token";
$apiData = array (
  'name' => $name,
  'email' => $email,
  'phone' => $phone
);



$ch = curl_init();
curl_setopt($ch , CURLOPT_URL, $URL .'?'.http_build_query($apiData ));
curl_setopt($ch , CURLOPT_RETURNTRANSFER, true );
curl_setopt($ch , CURLOPT_FOLLOWLOCATION, true );
curl_setopt($ch , CURLOPT_HTTPHEADER, $header);
$response = curl_exec($ch );
curl_close($ch);
echo $response;



