<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "silver_jubilee";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  if(!empty($_POST))
  {
    $Name=$_POST['Name'];
    $Passing_year=$_POST['Passing_year'];
    $Degree=$_POST['Degree'];
    $Mobile=$_POST['Mobile'];
    $Email=$_POST['Email'];
    $Address=$_POST['Address'];


    $sql = "INSERT INTO silver_jubilee (Name, Passing_year , Degree , Mobile , Email , Address)
    VALUES ('$Name','$Passing_year','$Degree','$Mobile','$Email','$Address')";

    if ($conn->query($sql) === TRUE) {
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }

  $conn->close();
?>
