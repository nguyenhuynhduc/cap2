function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$("#login-button").click(function(e){
     e.preventDefault();
     $.post(
         "./public/login/btnlogin.php",
         $("#form-login").serialize(),
         function(data) {
             console.log(data);
            var json = JSON.parse(data);
         if(json.status == "error"){
             var err = (json.error).split('|');
             err.forEach(function (error) {
                 $("#"+error).addClass("input-error");
             });
         }else{
             $('form').fadeOut(500);
             $('.wrapper').addClass('form-success');
             setInterval(function () {
                 window.location.href = "public/TheDashboard/TheDashboard.php";
             }, 2000)


         }

     });

});

