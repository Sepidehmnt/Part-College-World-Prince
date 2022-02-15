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
            <h1>register-form</h1>
            <p>please fill in this form to create an account.</p>
            <hr>
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Your Name" name="name" id="name" required>

            <br />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Your Email" name="email" id="email" required>

            <br />

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Your Password" name="password" id="password" required>

            <br />

            <label for="password_confirmation"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Your Password" name="password_confirmation" id="password_confirmation" required>

            <br />

            <label>Male
                <input name="gender" value="male" type="radio" checked="checked">
            </label>
            <label>Female
                <input name="gender" value="female" type="radio">
            </label>

            <br />

            <button type="submit">Register</button>
        </div>
    </form>
</body>

</html>

<?php
$userInput = [
    'name'           => $_POST['name'] ?? null,
    'email'           => $_POST['email'] ?? null,
    'password'           => $_POST['password'] ?? null,
    'password_confirmation' => $_POST['password_confirmation'] ?? null,
    'gender'           => $_POST['gender'] ?? null
];
if (isPostRequest() && isInputValid($userInput)) {


    if (count($_POST)) {
        $userDataArray = array_values($userInput);
        $userDataString = implode(',', $userDataArray);
        $formresult = file_put_contents(__DIR__ . '/../sample/registrations.csv', "$userDataString \n", FILE_APPEND);
    }
}



function isPostRequest()
{
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        return true;
    } else {
        return false;
    }
}
function isInputValid($userInput)
{
    if (!filter_var($userInput['email'], FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    if (is_null($userInput['password']) || strlen($userInput['password']) < 5) {
        return false;
    }
    if ($userInput['password'] != $userInput['password_confirmation']) {
        return false;
    }
    if (!in_array($userInput['gender'], ['male', 'female'])) {
        return false;
    } else
        return true;
}
