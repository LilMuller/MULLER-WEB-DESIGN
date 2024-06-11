$(document).ready(function (){
    let userCookies = sessionStorage.getItem("user")

    if(userCookies === null)
    {
        window.location.href = "Login.html";
    }
    else
    {
        alert("Welcome " + userCookies);
    }

    $("#btnlogout").on("click", function(){
        localStorage.removeItem("user");
        window.location.href = "Login.html";
    });
});