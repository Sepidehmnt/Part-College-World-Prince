<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        input,
        button {
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <div>
            <h1>login-form</h1>
            <hr />
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Your Email" name="email" id="email" required>

            <br />

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Your Password" name="password" required>

            <br />

            <button type="submit">Login</button>
        </div>
    </form>
</body>

</html>

<?php
$userInput = [
    'email'           => $_POST['email'] ?? null,
    'password'           => $_POST['password'] ?? null,
];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $email = $_POST['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<br>Please enter a valid email address.";
        die();
    }


    $registrationData = file_get_contents("../sample/registrations.csv");
    $str_array = explode(",", $registrationData);

    $check = false;
    for ($i = 1; $i < count($str_array); $i += 4) {

        if ($_POST['email'] == $str_array[$i]) {
            $check = true;
            break;
        }
    }
    if ($check != false)
        echo 'welcome to worldprince site' . '<br>';
    else
        echo 'Sorry, you should register first!' . '';
}
