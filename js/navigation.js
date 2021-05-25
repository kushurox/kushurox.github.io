var username="";
$(document).ready(function(){
    $("#mainbody").load("../pages/home.html#content", homeload)
    $(".navbutton").click(function(){
        $(".nav_drawer").toggleClass('out_nav');
        $(".nav_drawer").toggleClass('in_nav');
    })

    $("#homepage").click(function(){
        $("#mainbody").load("../pages/home.html#content", homeload)

    })

    $("#aboutpage").click(function(){
        $("#mainbody").load("../pages/about.html#content")
    })
    $("#servicepage").click(function(){
        $("#mainbody").load("../pages/service.html#content")
    })
})

function homeload(){
    if(username==""){
        $("#currentus").text("Current username: Not yet set")
        
    }
    else{
        $("#currentus").text("Current username: " + username)
    }
    $("#submitform").click(function(){
        username = $("#username").val()
        if(username.length == 0){
            $("#title").text("Empty names not allowed!")
        }
        else{
            $("#title").text("Username set to " + username + "!")
            $("#currentus").text("Current username: " + username)
        }
        
    })
}