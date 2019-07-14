<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Đăng Nhập</title>


    <link rel="stylesheet" href="{!! asset('/css/login.css') !!}">


</head>
<body>
<div class="wrapper">
    <div class="container">
        <h1>Welcome</h1>
        <form action="{{ route('login') }}" method="post">
            {{ csrf_field() }}

            <input id="user" value="" type="text" placeholder="Username" name="user">
            <input id="pass" value="" type="password" placeholder="Password" name="pass">
            <button type="submit" class="btn login_btn btn-success">Login</button>
        </form>
    </div>
    <div class="mt-4">
    </div>
</div>
</body>

</html>



