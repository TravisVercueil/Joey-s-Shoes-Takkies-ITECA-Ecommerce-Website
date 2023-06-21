<?php
header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

$conn = mysqli_connect('sql212.infinityfree.com', 'if0_34373033', '5qNekOBx4wmLn6', 'if0_34373033_shoestore_db');

    // Checking the connection to the database
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    //Execute query to get user details
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    //Check if the user exists in our database
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        //Verify their password with username
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            if ($user['admin']) {
                header('Location: admin.html')
            } else {
                header('Location: main.html'
                )
            }
            exit();
        } else {
            $loginError = "Invalid password";
        }
    } else {
        $loginError = "Invalid username";
    }

    mysqli_close($conn);
?>
