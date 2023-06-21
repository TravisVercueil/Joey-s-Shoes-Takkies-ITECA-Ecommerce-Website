<?php

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

$conn = mysqli_connect('sql212.infinityfree.com', 'if0_34373033', '5qNekOBx4wmLn6', 'if0_34373033_shoestore_db');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Prepare and execute the query to check if the username already exists
    $checkQuery = "SELECT * FROM users WHERE email = '$email'";
    $checkResult = mysqli_query($conn, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        $registerError = "Email already registered";
    } else {
        
        // Prepare and execute the query to insert the new user
        $insertQuery = "INSERT INTO users (password, email) VALUES ('$Password', '$email')";
        $insertResult = mysqli_query($conn, $insertQuery);

        if ($insertResult) {
            $_SESSION['email'] = $email;
            header("Location: main.html");
            exit();
        } else {
            $registerError = "Registration failed";
        }
    }

    mysqli_close($conn);
?>