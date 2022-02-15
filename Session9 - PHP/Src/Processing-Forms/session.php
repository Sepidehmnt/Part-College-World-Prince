<!DOCTYPE html>
<html lang="en">

<head>
    <title>session</title>
    <style>
        input {
            margin-top: 40px;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <div>
            <label for="email"><b>Email :</b></label>
            <input type="text" placeholder="Enter Your Email" name="email" id="email" required>
            <br />
            <label for="password"><b>Password :</b></label>
            <input type="password" placeholder="Enter Your Password" name="pwd" id="password" required>
            <br />
            <button type="submit" name="login" value="login">login</button>
        </div>
    </form>
</body>

</html>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<br>Please enter a valid email address.";
        die();
    }



    session_start();
    $_SESSION['email'] = $email;
    if (isset($_SESSION['email'])) {

        echo "Email is : " . $_SESSION['email'] . "<br>";
        print_r($_SESSION);
    } else
        "session isnot set";



    session_unset();
    session_destroy();
}



















// Always start this first
// session_start();
// $username = 'username';
// $_SESSION['username'] = $username;
// echo $_SESSION['username'];

// if (!empty($_POST)) {
//     if (isset($_POST['username']) && isset($_POST['password'])) {
//         // Getting submitted user data from database
//         $con = new mysqli($db_host, $db_user, $db_pass, $db_name);
//         $stmt = $con->prepare("SELECT * FROM users WHERE username = ?");
//         $stmt->bind_param('s', $_POST['username']);
//         $stmt->execute();
//         $result = $stmt->get_result();
//         $user = $result->fetch_object();

//         // Verify user password and set $_SESSION
//         if (password_verify($_POST['password'], $user->password)) {
//             $_SESSION['user_id'] = $user->ID;
//         }
//     }
// }

// session_start();

// if (isset($_SESSION['user_id'])) {
//     // Grab user data from the database using the user_id
//     // Let them access the "logged in only" pages
// } else {
//     // Redirect them to the login page
//     header("Location: http://www.yourdomain.com/login.php");
// }

// // Destroying the session clears the $_SESSION variable, thus "logging" the user
// // out. This also happens automatically when the browser is closed
// session_destroy();
