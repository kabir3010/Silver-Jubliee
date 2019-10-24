<?php
   session_start();
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
?>
<html>

   <head>
      <title>Admin</title>
   </head>

   <body>
      <h1>Welcome</h1>
      <h2><a href = "logout.php">Sign Out</a></h2>

      <h2 class="w3-container text-light">Registrations</h2>
  		<table class="table table-hover table-dark w3-animate-bottom">
  		<thead class="thead-light">
  		<tr>
  				<th style="width:150px; text-align:left;">Name</th>
  				<th style="width:150px; text-align:left; ">Passing Year</th>
  				<th style="width:100px; text-align:left;">Degree</th>
  				<th style="width:150px; text-align:left;">Mobile</th>
  				<th style="width:250px; text-align:left;">Email</th>
  				<th style="width:300px; text-align:left;">Address</th>
  				</tr>
  			</thead>
  		<tbody>

  		<?php

  				$query = "SELECT * FROM silver_jubilee";
  				if (!$result = mysqli_query($conn, $query)) {
  					exit(mysqli_error($conn));
  				}

  				if(mysqli_num_rows($result) > 0)
  				{
  					while($row = mysqli_fetch_assoc($result))
  					{
  						?>
  						 <td><?php echo $row['Name'];?></td>
  						 <td><?php echo $row['Passing_year'];?></td>
  						 <td><?php echo $row['Degree'];?></td>
  						 <td><?php echo $row['Mobile'];?></td>
  						 <td><?php echo $row['Email'];?></td>
  						 <td><?php echo $row['Address'];?></td>
  						</tr>
  					<?php
  					}
  				}
  				else
  				{

  				}
  				?>
  		</tbody>
  		</table>
   </body>

</html>
