<?php
header('content-type:text/javascript');
 $studen_info = [
      'Username' => ["Rezwan"],
      'Full_Name' => [
           'FullName' => ['name' => 'Rezwan','mname'=>'Hossain'],
           "Optional" => ['lname'=>'Sajeeb']
          ],
     'Active' => true,
     "Age" => 19

     ];
echo json_encode($studen_info);
?>