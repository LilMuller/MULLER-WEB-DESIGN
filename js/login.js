$(document).ready(function()
{
    $("#did").hide("slow",function(){
    $("#did").fadeIn("slow");
    });




    $("#btnloginid").on("click",function(){

        let username = $("#userid").val().trim();
        let password = $("#pswid").val().trim();
        const alertDiv = $("#alertid");

         if(username === "" || password === "")
         {
             alertDiv.fadeIn("Slow");
             alertDiv.addClass("alert-danger");
             alertDiv.html("Please enter all fields")
         }
         else if(username.length < 5)
         {
            alertDiv.fadeIn("Slow");
            alertDiv.addClass("alert-danger");
            alertDiv.html("Username should be 5 characters and above")
         }
         else
         {
            if((username === "Victor" && password === "okonesang") || (username === "muller" && password === "muller") || (password == username.substring(0,5)))
            {
                alertDiv.fadeIn("Slow");
                alertDiv.removeClass("alert-danger");
                alertDiv.html("Login Succesful")

                
                sessionStorage.setItem("user", username)
             window.location.href = "mullerwebdesigns.html";
            }
            else
            {
                alertDiv.fadeIn("slow")
                alertDiv.addClass("alert-danger");
                alertDiv.html("Invalid username or password");
            }
         }
    });

});  